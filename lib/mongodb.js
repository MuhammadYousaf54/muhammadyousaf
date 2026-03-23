import mongoose from "mongoose";

const uri = process.env.MONGODB_URI?.trim();

if (!uri) {
  throw new Error("MONGODB_URI is not set in environment variables.");
}

const globalMongoose = globalThis;

let cached = globalMongoose.mongoose;

if (!cached) {
  cached = globalMongoose.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    // Reset cached state so the next request can retry after env/network fixes.
    cached.conn = null;
    cached.promise = null;
    throw error;
  }
}
