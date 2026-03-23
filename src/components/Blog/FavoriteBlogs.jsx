import { useEffect, useMemo, useState } from "react";
import { Link } from "@router";
import { ArrowLeft, Bookmark, Calendar, Heart } from "lucide-react";
import { formatDisplayDate, getBookmarkedPostIds, getLikedPostIds, getStoredPosts } from "./blogStorage";

export default function FavoriteBlogs() {
  const [mode, setMode] = useState("all");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const likedIds = useMemo(() => getLikedPostIds(), []);
  const bookmarkedIds = useMemo(() => getBookmarkedPostIds(), []);
  const totalUniqueFavorites = useMemo(() => new Set([...likedIds, ...bookmarkedIds]).size, [likedIds, bookmarkedIds]);

  useEffect(() => {
    let mounted = true;
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        const data = await getStoredPosts({ published: true });
        if (mounted) setPosts(data);
      } catch (error) {
        if (mounted) setPosts([]);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };
    loadPosts();
    return () => {
      mounted = false;
    };
  }, []);

  const favoritePosts = useMemo(
    () =>
      posts.filter((post) => {
        const liked = likedIds.includes(post._id);
        const bookmarked = bookmarkedIds.includes(post._id);
        if (mode === "liked") return liked;
        if (mode === "bookmarked") return bookmarked;
        return liked || bookmarked;
      }),
    [bookmarkedIds, likedIds, mode, posts]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-50 to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 mb-5 text-orange-500 font-semibold hover:text-orange-600">
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-3">Favorite Blogs</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Your liked and bookmarked blog posts are listed here.</p>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setMode("all")}
            className={`px-4 py-2 rounded-full font-semibold ${mode === "all" ? "bg-pink-500 text-white" : "bg-white border border-gray-300 text-gray-700"}`}
          >
            All ({totalUniqueFavorites})
          </button>
          <button
            onClick={() => setMode("liked")}
            className={`px-4 py-2 rounded-full font-semibold ${mode === "liked" ? "bg-pink-500 text-white" : "bg-white border border-gray-300 text-gray-700"}`}
          >
            Liked ({likedIds.length})
          </button>
          <button
            onClick={() => setMode("bookmarked")}
            className={`px-4 py-2 rounded-full font-semibold ${mode === "bookmarked" ? "bg-pink-500 text-white" : "bg-white border border-gray-300 text-gray-700"}`}
          >
            Bookmarked ({bookmarkedIds.length})
          </button>
        </div>

        {isLoading ? (
          <p className="text-gray-600 dark:text-gray-300">Loading favorite blogs...</p>
        ) : favoritePosts.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No favorite blogs yet. Like or bookmark posts from the blog page.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favoritePosts.map((post) => (
              <article key={post._id} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 shadow-sm">
                <h2 className="text-xl font-black text-gray-900 dark:text-white mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400 mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} />
                    {formatDisplayDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Heart size={14} />
                    {post.likes || 0}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Bookmark size={14} />
                    {bookmarkedIds.includes(post._id) ? "Bookmarked" : "Not bookmarked"}
                  </span>
                </div>
                <Link
                  to={`/blog/${post._id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold"
                >
                  Open Blog
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
