import mongoose from "mongoose";
import { connectToDatabase } from "../../../lib/mongodb";
import BlogPost from "../../../models/BlogPost";
import { categories } from "../../../data/defaultBlogPosts";
import { estimateReadTime, slugify } from "../../../lib/blog-utils";

async function findByIdOrSlug(id) {
  if (mongoose.isValidObjectId(id)) {
    const byId = await BlogPost.findById(id);
    if (byId) return byId;
  }
  return BlogPost.findOne({ slug: id });
}

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    const { id } = req.query;

    if (req.method === "GET") {
      const foundPost = await findByIdOrSlug(id);
      const post = foundPost ? foundPost.toObject() : null;
      if (!post) return res.status(404).json({ error: "Post not found" });
      return res.status(200).json({ post });
    }

    if (req.method === "PUT") {
      const post = await findByIdOrSlug(id);
      if (!post) return res.status(404).json({ error: "Post not found" });

      const {
        title,
        excerpt,
        content,
        category,
        author,
        date,
        featured,
        published,
        image,
      } = req.body || {};

      if (typeof title === "string" && title.trim() && title.trim() !== post.title) {
        let slugBase = slugify(title);
        if (!slugBase) slugBase = `post-${Date.now()}`;
        let slug = slugBase;
        let n = 1;
        while (await BlogPost.exists({ slug, _id: { $ne: post._id } })) {
          n += 1;
          slug = `${slugBase}-${n}`;
        }
        post.slug = slug;
        post.title = title.trim();
      }

      if (typeof excerpt === "string" && excerpt.trim()) post.excerpt = excerpt.trim();
      if (typeof content === "string" && content.trim()) {
        post.content = content.trim();
        post.readTime = estimateReadTime(content);
      }
      if (typeof category === "string") post.category = categories.includes(category) ? category : "General";
      if (typeof author === "string" && author.trim()) post.author = author.trim();
      if (typeof date === "string" && date.trim()) post.date = date;
      if (typeof featured === "boolean") post.featured = featured;
      if (typeof published === "boolean") post.published = published;
      if (typeof image === "string") post.image = image;

      await post.save();
      return res.status(200).json({ post });
    }

    if (req.method === "DELETE") {
      const deleted = await findByIdOrSlug(id);
      if (!deleted) return res.status(404).json({ error: "Post not found" });
      await deleted.deleteOne();
      return res.status(200).json({ success: true });
    }

    res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  } catch (error) {
    console.error("Blog by-id API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
