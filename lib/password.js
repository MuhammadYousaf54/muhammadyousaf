import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

export function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password, storedHash) {
  if (!storedHash || !storedHash.includes(":")) return false;
  const [salt, savedHash] = storedHash.split(":");
  if (!salt || !savedHash) return false;
  try {
    const currentHash = scryptSync(password, salt, 64).toString("hex");
    if (savedHash.length !== currentHash.length) return false;
    return timingSafeEqual(Buffer.from(savedHash, "hex"), Buffer.from(currentHash, "hex"));
  } catch {
    return false;
  }
}
