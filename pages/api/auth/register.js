import { connectToDatabase } from "../../../lib/mongodb.js";
import { hashPassword } from "../../../lib/password.js";
import { ensureOwnerAdminUser, getOwnerAdminEmail } from "../../../lib/owner-admin.js";
import User from "../../../models/User.js";

const ALLOWED_SELF_REGISTER_ROLES = new Set(["Client", "Partner"]);

function toSafeError(error) {
  const message = error?.message || "Internal server error";
  const lower = message.toLowerCase();
  if (lower.includes("bad auth") || lower.includes("authentication failed")) {
    return {
      status: 503,
      error: "Database authentication failed. Check MONGODB_URI username/password.",
      detail: message,
    };
  }
  if (lower.includes("mongodbsrv") || lower.includes("querysrv")) {
    return {
      status: 503,
      error: "Could not resolve MongoDB Atlas host. Check internet or DNS settings.",
      detail: message,
    };
  }
  return { status: 500, error: "Internal server error", detail: message };
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }

    await connectToDatabase();
    await ensureOwnerAdminUser();

    const {
      fullName = "",
      email = "",
      password = "",
      phone = "",
      company = "",
      projectName = "",
      projectDescription = "",
      role = "Client",
    } = req.body || {};

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      return res.status(400).json({ error: "fullName, email, and password are required" });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const ownerAdminEmail = getOwnerAdminEmail();
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists with this email" });
    }

    const normalizedRole = ALLOWED_SELF_REGISTER_ROLES.has(role) ? role : "Client";
    const isOwnerAdminEmail = normalizedEmail === ownerAdminEmail;
    const isOwnerAdmin = isOwnerAdminEmail;
    const resolvedRole = isOwnerAdmin ? "Admin" : normalizedRole;

    const user = await User.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      passwordHash: hashPassword(password),
      phone: phone.trim(),
      company: company.trim(),
      projectName: projectName.trim(),
      projectDescription: projectDescription.trim(),
      role: resolvedRole,
      isOwnerAdmin,
    });

    return res.status(201).json({
      user: {
        id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        isOwnerAdmin: user.isOwnerAdmin,
      },
      meta: {
        promotedBecause: isOwnerAdminEmail ? "owner_email" : null,
      },
    });
  } catch (error) {
    console.error("Register API error:", error);
    const safeError = toSafeError(error);
    return res.status(safeError.status).json({
      error: safeError.error,
      detail: process.env.NODE_ENV !== "production" ? safeError.detail : undefined,
    });
  }
}
