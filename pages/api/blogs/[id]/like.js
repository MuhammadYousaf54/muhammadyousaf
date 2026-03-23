import mongoose from "mongoose";
import { connectToDatabase } from "../../../../lib/mongodb";
import BlogPost from "../../../../models/BlogPost";

async function findPostId(id) {
  if (mongoose.isValidObjectId(id)) {
    const byId = await BlogPost.findById(id).select("_id");
    if (byId) return byId._id;
  }

  const bySlug = await BlogPost.findOne({ slug: id }).select("_id");
  return bySlug?._id || null;
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }

    await connectToDatabase();
    const { id } = req.query;

    const postId = await findPostId(id);
    if (!postId) return res.status(404).json({ error: "Post not found" });

    const post = await BlogPost.findByIdAndUpdate(postId, { $inc: { likes: 1 } }, { new: true });

    if (!post) return res.status(404).json({ error: "Post not found" });
    return res.status(200).json({ post });
  } catch (error) {
    console.error("Blog like API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
