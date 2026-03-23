import { connectToDatabase } from "../../../lib/mongodb.js";
import { ensureOwnerAdminUser } from "../../../lib/owner-admin.js";
import { verifyPassword } from "../../../lib/password.js";
import User from "../../../models/User.js";

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

    const { email = "", password = "" } = req.body || {};
    if (!email.trim() || !password.trim()) {
      return res.status(400).json({ error: "email and password are required" });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });
    if (!user || !verifyPassword(password, user.passwordHash)) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    return res.status(200).json({
      user: {
        id: user._id.toString(),
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        isOwnerAdmin: user.isOwnerAdmin,
      },
    });
  } catch (error) {
    console.error("Login API error:", error);
    const safeError = toSafeError(error);
    return res.status(safeError.status).json({
      error: safeError.error,
      detail: process.env.NODE_ENV !== "production" ? safeError.detail : undefined,
    });
  }
}
