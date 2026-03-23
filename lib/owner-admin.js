import { hashPassword } from "./password.js";
import User from "../models/User.js";

function getOwnerAdminConfig() {
  return {
    email: (process.env.OWNER_ADMIN_EMAIL || "muhammadyousaf5482@gmail.com").trim().toLowerCase(),
    password: process.env.OWNER_ADMIN_PASSWORD || "",
    fullName: (process.env.OWNER_ADMIN_NAME || "Muhammad Yousaf").trim(),
  };
}

export function getOwnerAdminEmail() {
  return getOwnerAdminConfig().email;
}

export async function ensureOwnerAdminUser() {
  const { email, password, fullName } = getOwnerAdminConfig();

  if (!email || !password) {
    return { ensured: false, reason: "missing_owner_credentials" };
  }

  const existingOwner = await User.findOne({ email });

  if (!existingOwner) {
    const createdUser = await User.create({
      fullName,
      email,
      passwordHash: hashPassword(password),
      role: "Admin",
      isOwnerAdmin: true,
    });

    return { ensured: true, action: "created", user: createdUser };
  }

  let changed = false;

  if (existingOwner.role !== "Admin") {
    existingOwner.role = "Admin";
    changed = true;
  }

  if (!existingOwner.isOwnerAdmin) {
    existingOwner.isOwnerAdmin = true;
    changed = true;
  }

  if (changed) {
    await existingOwner.save();
    return { ensured: true, action: "updated", user: existingOwner };
  }

  return { ensured: true, action: "unchanged", user: existingOwner };
}
