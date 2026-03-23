import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    phone: { type: String, default: "", trim: true },
    company: { type: String, default: "", trim: true },
    projectName: { type: String, default: "", trim: true },
    projectDescription: { type: String, default: "", trim: true },
    role: { type: String, enum: ["Client", "Partner", "Admin"], default: "Client", index: true },
    isOwnerAdmin: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
