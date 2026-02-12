import { useMemo, useState } from "react";
import { Search, Calendar, Clock, User, ArrowRight, Bookmark, Eye, MessageCircle, Shield, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  categories,
  formatDisplayDate,
  getBookmarkedPostIds,
  getLikedPostIds,
  getStoredPosts,
  isAdminUser,
  normalizeCategory,
  savePosts,
  toggleBookmarkPost,
  toggleLikePost,
} from "./blogStorage";

export default function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState(() => getStoredPosts());
  const [bookmarkedIds, setBookmarkedIds] = useState(() => getBookmarkedPostIds());
  const [likedIds, setLikedIds] = useState(() => getLikedPostIds());

  const allCategories = useMemo(() => ["All", ...categories], []);
  const admin = isAdminUser();
  const favoriteCount = useMemo(() => new Set([...likedIds, ...bookmarkedIds]).size, [likedIds, bookmarkedIds]);

  const filteredPosts = useMemo(
    () =>
      posts
        .filter((post) => post.published)
        .filter((post) => {
          const normalizedPostCategory = normalizeCategory(post.category);
          const categoryMatch = selectedCategory === "all" || normalizedPostCategory === selectedCategory;
          const query = searchQuery.trim().toLowerCase();
          const searchMatch =
            !query ||
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.content.toLowerCase().includes(query);
          return categoryMatch && searchMatch;
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date)),
    [posts, searchQuery, selectedCategory]
  );

  const featuredPost = filteredPosts.find((post) => post.featured) || filteredPosts[0];

  const toggleBookmark = (postId) => {
    const next = toggleBookmarkPost(postId);
    setBookmarkedIds(next);
  };

  const openPost = (postId) => {
    const nextPosts = posts.map((post) => (post.id === postId ? { ...post, views: (post.views || 0) + 1 } : post));
    setPosts(nextPosts);
    savePosts(nextPosts);
    navigate(`/blog/${postId}`);
  };

  const likePost = (postId) => {
    const { nextPosts, nextLikedIds } = toggleLikePost(postId, posts);
    setPosts(nextPosts);
    setLikedIds(nextLikedIds);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors">
      <div className="relative overflow-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              The Latest Insights
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Explore articles on AI, web development, automation, and digital transformation.
            </p>
            <div className="mt-5">
              <Link
                to="/blog/favorites"
                className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 font-bold hover:underline"
              >
                <Heart size={18} />
                Favorite Blogs ({favoriteCount})
              </Link>
            </div>
            {admin && (
              <div className="mt-6">
                <Link
                  to="/blog/admin"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                >
                  <Shield size={18} />
                  Open Admin Dashboard
                </Link>
              </div>
            )}
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 text-gray-900 dark:text-white bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl focus:border-orange-500 dark:focus:border-orange-400 focus:outline-none transition-all duration-300 shadow-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === "All" ? "all" : cat)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === (cat === "All" ? "all" : cat)
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {featuredPost && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 p-8 sm:p-12 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 backdrop-blur">
                    Featured Article
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">{featuredPost.title}</h2>
                  <p className="text-white/90 text-lg mb-8 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center text-white/80 text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{formatDisplayDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => openPost(featuredPost.id)}
                    className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Article
                    <ArrowRight size={20} />
                  </button>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="h-56 w-56 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                    <span className="text-white font-black text-xl text-center px-6">{featuredPost.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-slate-700"
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 p-6">
                  <div className="h-full w-full rounded-lg border border-orange-100 dark:border-slate-500 bg-white/80 dark:bg-slate-800/70 p-4">
                    <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4">{post.excerpt}</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                  <div className="border-t border-gray-200 dark:border-slate-700 pt-4 mb-4 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{formatDisplayDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{post.author}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-slate-700 pt-4 mb-4">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                          <Eye size={14} /> {(post.views || 0).toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart size={14} /> {post.likes || 0}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle size={14} /> {post.commentsList?.length || post.comments || 0}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap gap-2">
                    <button
                      onClick={() => openPost(post.id)}
                      className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-2 rounded-lg transition-all transform hover:scale-105 text-sm"
                    >
                      Read More
                    </button>
                    <button
                      onClick={() => toggleBookmark(post.id)}
                      className={`px-3 py-2 border-2 rounded-lg transition-colors ${
                        bookmarkedIds.includes(post.id)
                          ? "border-orange-500 text-orange-500"
                          : "border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:border-orange-500 dark:hover:border-orange-400"
                      }`}
                      title="Bookmark"
                    >
                      <Bookmark size={18} />
                    </button>
                    <button
                      onClick={() => likePost(post.id)}
                      className={`px-3 py-2 border-2 rounded-lg transition-colors ${
                        likedIds.includes(post.id)
                          ? "border-pink-500 bg-pink-50 dark:bg-pink-950/20 text-pink-600"
                          : "border-pink-300 text-pink-500 hover:border-pink-500"
                      }`}
                      title="Like"
                    >
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
