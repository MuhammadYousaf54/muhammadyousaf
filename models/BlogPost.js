import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    author: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: true }
);

const blogPostSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true, trim: true },
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    category: { type: String, required: true, index: true, trim: true },
    author: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    readTime: { type: String, required: true, trim: true },
    image: { type: String, default: "article", trim: true },
    featured: { type: Boolean, default: false, index: true },
    published: { type: Boolean, default: true, index: true },
    views: { type: Number, default: 0, min: 0 },
    likes: { type: Number, default: 0, min: 0 },
    comments: { type: Number, default: 0, min: 0 },
    commentsList: { type: [commentSchema], default: [] },
  },
  { timestamps: true }
);

blogPostSchema.index({ category: 1, published: 1, date: -1 });
blogPostSchema.index({ title: "text", excerpt: "text", content: "text", category: "text" });

const BlogPost = mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
