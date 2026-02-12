/* eslint-env node */
/* global process */
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI not found in environment. Please set it in .env");
  process.exit(1);
}

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  tel: String,
  service: String,
  plan: String,
  price: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully");

    if (process.argv.includes("--seed")) {
      const doc = await Contact.create({
        name: "Test User",
        email: "test@example.com",
        tel: "+000",
        service: "Test Service",
        plan: "Basic",
        price: "0",
        message: "Seeded contact",
      });
      console.log("Inserted sample contact:", doc._id.toString());
    }

    await mongoose.disconnect();
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

run();
