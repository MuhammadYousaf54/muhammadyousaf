import "dotenv/config";
import { connectToDatabase } from "../lib/mongodb.js";
import { ensureOwnerAdminUser, getOwnerAdminEmail } from "../lib/owner-admin.js";

try {
  await connectToDatabase();
  const result = await ensureOwnerAdminUser();
  console.log(`Owner admin ${result.action || result.reason}: ${getOwnerAdminEmail()}`);
  process.exit(0);
} catch (error) {
  console.error("Owner admin seed failed:", error);
  process.exit(1);
}
