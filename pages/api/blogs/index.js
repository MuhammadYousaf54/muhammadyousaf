import { connectToDatabase } from "../../../lib/mongodb";
import BlogPost from "../../../models/BlogPost";
import { categories, defaultBlogPosts } from "../../../data/defaultBlogPosts";
import { estimateReadTime, slugify } from "../../../lib/blog-utils";

async function ensureSeeded() {
  const count = await BlogPost.countDocuments();
  if (count > 0) return;

  const withSlugs = defaultBlogPosts.map((post, index) => ({
    ...post,
    slug: `${slugify(post.title)}-${index + 1}`,
  }));
  await BlogPost.insertMany(withSlugs);
}

export default async function handler(req, res) {
  try {
    await connectToDatabase();

    if (req.method === "GET") {
      await ensureSeeded();

      const { category, q, published, featured, limit } = req.query;
      const query = {};

      if (published !== "all") {
        query.published = published === "false" ? false : true;
      }
      if (featured === "true") query.featured = true;
      if (category && category !== "all") query.category = category;
      if (q && q.trim()) {
        query.$text = { $search: q.trim() };
      }

      const limitNum = Math.min(Number(limit || 200), 500);
      const posts = await BlogPost.find(query).sort({ date: -1, createdAt: -1 }).limit(limitNum).lean();
      return res.status(200).json({ posts, categories });
    }

    if (req.method === "POST") {
      const {
        title = "",
        excerpt = "",
        content = "",
        category = "General",
        author = "Muhammad Yousaf",
        date = new Date().toISOString().slice(0, 10),
        featured = false,
        published = true,
        image = "article",
      } = req.body || {};

      if (!title.trim() || !excerpt.trim() || !content.trim()) {
        return res.status(400).json({ error: "title, excerpt, and content are required" });
      }

      let slugBase = slugify(title);
      if (!slugBase) slugBase = `post-${Date.now()}`;
      let slug = slugBase;
      let n = 1;
      while (await BlogPost.exists({ slug })) {
        n += 1;
        slug = `${slugBase}-${n}`;
      }

      const post = await BlogPost.create({
        title: title.trim(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        category: categories.includes(category) ? category : "General",
        author: author.trim() || "Muhammad Yousaf",
        date,
        readTime: estimateReadTime(content),
        featured: Boolean(featured),
        published: Boolean(published),
        image,
        slug,
      });

      return res.status(201).json({ post });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  } catch (error) {
    console.error("Blog index API error:", error);
    const detail = process.env.NODE_ENV !== "production" ? error?.message : undefined;
    return res.status(500).json({ error: "Internal server error", detail });
  }
}
