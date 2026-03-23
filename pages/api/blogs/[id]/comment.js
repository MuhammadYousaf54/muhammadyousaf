import mongoose from "mongoose";
import { connectToDatabase } from "../../../../lib/mongodb";
import BlogPost from "../../../../models/BlogPost";

async function findByIdOrSlug(id) {
  if (mongoose.isValidObjectId(id)) {
    const byId = await BlogPost.findById(id);
    if (byId) return byId;
  }

  return BlogPost.findOne({ slug: id });
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }

    const { author = "Guest User", content = "" } = req.body || {};
    if (!content.trim()) {
      return res.status(400).json({ error: "Comment content is required" });
    }

    await connectToDatabase();
    const { id } = req.query;

    const post = await findByIdOrSlug(id);
    if (!post) return res.status(404).json({ error: "Post not found" });

    post.commentsList.push({
      author: author.trim() || "Guest User",
      content: content.trim(),
    });
    post.comments = post.commentsList.length;
    await post.save();

    return res.status(200).json({ post });
  } catch (error) {
    console.error("Blog comment API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
