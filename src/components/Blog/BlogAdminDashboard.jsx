import { useEffect, useMemo, useState } from "react";
import { Link, Navigate } from "@router";
import { Pencil, Trash2, PlusCircle, ArrowLeft } from "lucide-react";
import {
  categories,
  createPost,
  deletePost,
  estimateReadTime,
  getStoredPosts,
  isAdminUser,
  normalizeCategory,
  updatePost,
} from "./blogStorage";

const emptyForm = {
  title: "",
  excerpt: "",
  content: "",
  category: "General",
  author: "Muhammad Yousaf",
  date: new Date().toISOString().slice(0, 10),
  featured: false,
  published: true,
};

export default function BlogAdminDashboard() {
  const admin = isAdminUser();
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const totalViews = useMemo(() => posts.reduce((sum, post) => sum + (post.views || 0), 0), [posts]);
  const publishedCount = useMemo(() => posts.filter((post) => post.published).length, [posts]);

  useEffect(() => {
    let mounted = true;
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        const data = await getStoredPosts({ published: false });
        if (mounted) setPosts(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
      } catch (err) {
        if (mounted) setError(err.message || "Failed to load posts.");
      } finally {
        if (mounted) setIsLoading(false);
      }
    };
    loadPosts();
    return () => {
      mounted = false;
    };
  }, []);

  if (!admin) {
    return <Navigate to="/blog" replace />;
  }

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setError("");
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    if (!form.title.trim()) return "Title is required.";
    if (!form.excerpt.trim()) return "Excerpt is required.";
    if (!form.content.trim()) return "Content is required.";
    if (!form.author.trim()) return "Author is required.";
    if (!form.date) return "Publish date is required.";
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    const payload = {
      ...form,
      title: form.title.trim(),
      excerpt: form.excerpt.trim(),
      content: form.content.trim(),
      author: form.author.trim(),
      category: normalizeCategory(form.category),
      readTime: estimateReadTime(form.content),
    };

    try {
      setError("");
      if (editingId) {
        const updated = await updatePost(editingId, payload);
        setPosts((prev) => prev.map((post) => (post._id === updated._id ? updated : post)));
      } else {
        const created = await createPost(payload);
        setPosts((prev) => [created, ...prev]);
      }
      resetForm();
    } catch (err) {
      setError(err.message || "Failed to save blog post.");
    }
  };

  const onEdit = (post) => {
    setEditingId(post._id);
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      author: post.author,
      date: post.date,
      featured: Boolean(post.featured),
      published: Boolean(post.published),
    });
    setError("");
  };

  const onDelete = async (postId) => {
    if (!window.confirm("Delete this blog post?")) return;
    try {
      await deletePost(postId);
      const nextPosts = posts.filter((post) => post._id !== postId);
      setPosts(nextPosts);
      if (editingId === postId) resetForm();
    } catch (err) {
      setError(err.message || "Failed to delete post.");
    }
  };

  const renderFieldLabel = (label) => <label className="block text-sm font-semibold text-gray-800 dark:text-gray-100 mb-1">{label}</label>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-6 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 mb-2">
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">Blog Admin Dashboard</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-1">
              Manage your blog posts with MongoDB.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 p-4 shadow-sm w-full sm:w-auto">
            <p className="text-sm text-gray-500 dark:text-gray-400">Published Posts</p>
            <p className="text-2xl font-black text-gray-900 dark:text-white">{publishedCount}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Total Views: {totalViews.toLocaleString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">{editingId ? "Update Blog Post" : "Create Blog Post"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                {renderFieldLabel("Title")}
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
                  placeholder="Post title"
                />
              </div>

              <div>
                {renderFieldLabel("Excerpt")}
                <textarea
                  name="excerpt"
                  value={form.excerpt}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:outline-none focus:border-orange-500 resize-none"
                  placeholder="Short summary"
                />
              </div>

              <div>
                {renderFieldLabel("Content")}
                <textarea
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  rows="10"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
                  placeholder="Full blog content"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  {renderFieldLabel("Category")}
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  {renderFieldLabel("Author")}
                  <input
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
                    placeholder="Author name"
                  />
                </div>
              </div>

              <div>
                {renderFieldLabel("Date")}
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="checkbox" name="published" checked={form.published} onChange={handleChange} />
                  Published
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} />
                  Featured
                </label>
              </div>

              {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-orange-500 to-pink-500"
                >
                  <PlusCircle size={16} />
                  {editingId ? "Update Post" : "Create Post"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 dark:text-gray-200"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>
          </section>

          <section className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">Existing Posts</h2>
            <div className="space-y-3 max-h-[70vh] overflow-auto pr-1 sm:pr-2">
              {isLoading ? (
                <p className="text-gray-600 dark:text-gray-300">Loading posts...</p>
              ) : posts.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No posts yet.</p>
              ) : (
                posts.map((post) => (
                  <div key={post._id} className="border border-gray-200 dark:border-slate-700 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-bold text-gray-900 dark:text-white truncate">{post.title}</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {post.category} | {post.date} | {post.readTime}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 line-clamp-2">{post.excerpt}</p>
                        <div className="mt-2 flex flex-wrap gap-2 text-xs">
                          <span
                            className={`px-2 py-1 rounded-full ${
                              post.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {post.published ? "Published" : "Draft"}
                          </span>
                          {post.featured && <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-700">Featured</span>}
                        </div>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button
                          onClick={() => onEdit(post)}
                          className="p-2 rounded-lg border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-200"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => onDelete(post._id)}
                          className="p-2 rounded-lg border border-red-200 text-red-600"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
