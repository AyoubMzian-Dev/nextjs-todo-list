// lib/mongoose.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
    throw new Error("⚠️ Please define the MONGODB_URI environment variable");
}

// Global is used here to prevent creating many connections in dev mode
let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "todoDB", // optional
            bufferCommands: false,
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
