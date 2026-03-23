import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock, User, Heart, Eye, MessageCircle, Bookmark } from "lucide-react";
import { Link, useNavigate, useParams } from "@router";
import {
  addPostComment,
  formatDisplayDate,
  getBookmarkedPostIds,
  getCommentAuthorName,
  getLikedPostIds,
  getPostByIdOrSlug,
  isPostBookmarked,
  isPostLiked,
  likePost,
  markPostLiked,
  toggleBookmarkPost,
} from "./blogStorage";

export default function BlogDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [commentText, setCommentText] = useState("");
  const [likedIds, setLikedIds] = useState(() => getLikedPostIds());
  const [bookmarkedIds, setBookmarkedIds] = useState(() => getBookmarkedPostIds());

  useEffect(() => {
    let mounted = true;
    const loadPost = async () => {
      try {
        setIsLoading(true);
        const loaded = await getPostByIdOrSlug(postId);
        if (mounted) setPost(loaded);
      } catch (err) {
        if (mounted) setPost(null);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    if (postId) loadPost();
    return () => {
      mounted = false;
    };
  }, [postId]);

  const onLike = async () => {
    if (!post) return;
    try {
      const updated = await likePost(post._id);
      setPost(updated);
      const nextLikedIds = markPostLiked(post._id);
      setLikedIds(nextLikedIds);
    } catch (err) {
      console.error("Like failed:", err);
    }
  };

  const onBookmark = () => {
    if (!post) return;
    const next = toggleBookmarkPost(post._id);
    setBookmarkedIds(next);
  };

  const onCommentSubmit = async (event) => {
    event.preventDefault();
    const cleanedComment = commentText.trim();
    if (!post || !cleanedComment) return;

    try {
      const updated = await addPostComment(post._id, {
        author: getCommentAuthorName(),
        content: cleanedComment,
      });
      setPost(updated);
      setCommentText("");
    } catch (err) {
      console.error("Comment failed:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Loading blog post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">Blog post not found.</p>
          <button
            onClick={() => navigate("/blog")}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 mb-6 text-orange-500 font-semibold hover:text-orange-600">
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden">
          <div className="p-8 sm:p-10">
            <div className="mb-4">
              <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white leading-tight mb-6">{post.title}</h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDisplayDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">{post.excerpt}</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-8">{post.content}</p>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Eye size={16} /> {(post.views || 0).toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <Heart size={16} /> {post.likes || 0}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={16} /> {post.commentsList?.length || post.comments || 0}
                </span>
              </div>

              <button
                onClick={onLike}
                className={`w-full sm:w-auto px-5 py-2 rounded-lg font-semibold ${
                  isPostLiked(post._id)
                    ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white"
                    : "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:opacity-90"
                }`}
              >
                {likedIds.includes(post._id) ? "Liked" : "Like Article"}
              </button>
              <button
                onClick={onBookmark}
                className={`w-full sm:w-auto px-5 py-2 rounded-lg border-2 font-semibold inline-flex items-center justify-center gap-2 ${
                  isPostBookmarked(post._id)
                    ? "border-orange-500 text-orange-600"
                    : "border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300"
                }`}
              >
                <Bookmark size={16} />
                {bookmarkedIds.includes(post._id) ? "Bookmarked" : "Bookmark"}
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-slate-700">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">Comments</h2>
              <form onSubmit={onCommentSubmit} className="mb-6">
                <textarea
                  value={commentText}
                  onChange={(event) => setCommentText(event.target.value)}
                  rows="3"
                  placeholder="Write your comment..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
                />
                <button
                  type="submit"
                  className="mt-3 px-5 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:opacity-90"
                >
                  Post Comment
                </button>
              </form>

              {(post.commentsList || []).length === 0 ? (
                <p className="text-gray-600 dark:text-gray-300">No comments yet. Be the first to comment.</p>
              ) : (
                <div className="space-y-4">
                  {(post.commentsList || []).map((comment) => (
                    <div key={comment._id || comment.id} className="p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-gray-900 dark:text-white">{comment.author}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{formatDisplayDate(comment.createdAt)}</p>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
