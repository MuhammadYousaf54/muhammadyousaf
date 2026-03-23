import { connectToDatabase } from "../../../lib/mongodb";
import BlogPost from "../../../models/BlogPost";
import { defaultBlogPosts } from "../../../data/defaultBlogPosts";
import { slugify } from "../../../lib/blog-utils";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }

    await connectToDatabase();
    let inserted = 0;

    for (let i = 0; i < defaultBlogPosts.length; i += 1) {
      const post = defaultBlogPosts[i];
      const existing = await BlogPost.findOne({ title: post.title });
      if (existing) continue;

      await BlogPost.create({
        ...post,
        slug: `${slugify(post.title)}-${i + 1}`,
      });
      inserted += 1;
    }

    return res.status(200).json({ success: true, inserted });
  } catch (error) {
    console.error("Blog seed API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
