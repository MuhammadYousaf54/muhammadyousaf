const BLOG_STORAGE_KEY = "portfolio_blog_posts";
const BLOG_BOOKMARKS_KEY = "portfolio_blog_bookmarks";
const BLOG_LIKED_KEY = "portfolio_blog_liked";

export const defaultBlogPosts = [
  {
    id: "1",
    title: "The Future of Web Development: AI-Powered Code Generation",
    excerpt:
      "Explore how artificial intelligence is transforming the way developers write and maintain code.",
    content:
      "Artificial intelligence is changing how teams write, test, and ship software. Modern tooling now assists with scaffolding components, writing tests, and catching errors before production. Teams that use AI effectively still rely on architecture discipline, code reviews, and clear ownership. AI improves speed, but engineering judgment remains the core advantage.",
    category: "AI & Technology",
    author: "Muhammad Yousaf",
    date: "2026-02-10",
    readTime: "8 min read",
    image: "rocket",
    featured: true,
    published: true,
    views: 1250,
    likes: 324,
    comments: 42,
  },
  {
    id: "2",
    title: "Building Scalable React Applications with Best Practices",
    excerpt:
      "Learn proven strategies for structuring large React applications with better maintainability.",
    content:
      "Scalable React applications begin with clear boundaries and reusable patterns. Separate presentational and container concerns where useful, keep data flows explicit, and avoid over-centralized global state. Prefer composition over inheritance and enforce consistent coding standards with linting and PR review checklists.",
    category: "Web Development",
    author: "Muhammad Yousaf",
    date: "2026-02-08",
    readTime: "12 min read",
    image: "atom",
    featured: false,
    published: true,
    views: 892,
    likes: 215,
    comments: 28,
  },
  {
    id: "3",
    title: "Automating Business Workflows with No-Code Solutions",
    excerpt:
      "Discover how businesses can streamline operations using no-code and low-code platforms.",
    content:
      "No-code tools can automate approvals, lead routing, and reporting quickly. The key is selecting workflows with clear inputs and stable rules. For mission-critical operations, define fallback paths and audit logs. A hybrid model that combines no-code speed with engineer-owned integrations usually delivers the best long-term results.",
    category: "Automation",
    author: "Muhammad Yousaf",
    date: "2026-02-05",
    readTime: "10 min read",
    image: "settings",
    featured: false,
    published: true,
    views: 756,
    likes: 189,
    comments: 35,
  },
];

export const categories = [
  "AI & Technology",
  "Web Development",
  "Automation",
  "Data Science",
  "Marketing",
  "Career",
  "General",
];

const normalizedCategoryMap = categories.reduce((acc, category) => {
  acc[category.toLowerCase()] = category;
  return acc;
}, {});

export function normalizeCategory(inputCategory) {
  const key = (inputCategory || "").trim().toLowerCase();
  return normalizedCategoryMap[key] || "General";
}

export function getStoredPosts() {
  if (typeof window === "undefined") {
    return defaultBlogPosts;
  }

  const raw = localStorage.getItem(BLOG_STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(defaultBlogPosts));
    return defaultBlogPosts;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return defaultBlogPosts;
    }
    return parsed.map((post) => {
      const normalizedCommentsList = Array.isArray(post.commentsList) ? post.commentsList : [];
      return {
        ...post,
        category: normalizeCategory(post.category),
        likes: typeof post.likes === "number" ? post.likes : 0,
        views: typeof post.views === "number" ? post.views : 0,
        commentsList: normalizedCommentsList,
        comments: typeof post.comments === "number" ? post.comments : normalizedCommentsList.length,
      };
    });
  } catch (error) {
    console.error("Failed to parse stored blog posts:", error);
    return defaultBlogPosts;
  }
}

export function savePosts(posts) {
  if (typeof window === "undefined") return;
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
}

function getStoredIdList(storageKey) {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(storageKey);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveStoredIdList(storageKey, ids) {
  if (typeof window === "undefined") return;
  localStorage.setItem(storageKey, JSON.stringify(ids));
}

export function getBookmarkedPostIds() {
  return getStoredIdList(BLOG_BOOKMARKS_KEY);
}

export function isPostBookmarked(postId) {
  return getBookmarkedPostIds().includes(postId);
}

export function toggleBookmarkPost(postId) {
  const ids = getBookmarkedPostIds();
  const next = ids.includes(postId) ? ids.filter((id) => id !== postId) : [...ids, postId];
  saveStoredIdList(BLOG_BOOKMARKS_KEY, next);
  return next;
}

export function getLikedPostIds() {
  return getStoredIdList(BLOG_LIKED_KEY);
}

export function isPostLiked(postId) {
  return getLikedPostIds().includes(postId);
}

export function toggleLikePost(postId, posts) {
  const likedIds = getLikedPostIds();
  const isLiked = likedIds.includes(postId);
  const nextLikedIds = isLiked ? likedIds.filter((id) => id !== postId) : [...likedIds, postId];
  saveStoredIdList(BLOG_LIKED_KEY, nextLikedIds);

  const nextPosts = posts.map((post) => {
    if (post.id !== postId) return post;
    const currentLikes = post.likes || 0;
    return {
      ...post,
      likes: isLiked ? Math.max(0, currentLikes - 1) : currentLikes + 1,
    };
  });

  savePosts(nextPosts);
  return { nextPosts, nextLikedIds };
}

export function isAdminUser() {
  if (typeof window === "undefined") return false;
  const email = (localStorage.getItem("userEmail") || "").toLowerCase();
  const ownerMatch = email === "muhammadyousaf5482@gmail.com";
  return localStorage.getItem("isLoggedIn") === "true" && (localStorage.getItem("userRole") === "Admin" || ownerMatch);
}

export function formatDisplayDate(isoDate) {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function estimateReadTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function createPostId() {
  return `${Date.now()}`;
}

export function getCommentAuthorName() {
  if (typeof window === "undefined") return "Guest User";
  const userName = localStorage.getItem("userName");
  if (userName && userName.trim()) return userName.trim();
  return "Guest User";
}
