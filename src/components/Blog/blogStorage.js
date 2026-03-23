import { categories } from "../../../data/defaultBlogPosts";
export { categories };

const BLOG_BOOKMARKS_KEY = "portfolio_blog_bookmarks";
const BLOG_LIKED_KEY = "portfolio_blog_liked";

const normalizedCategoryMap = categories.reduce((acc, category) => {
  acc[category.toLowerCase()] = category;
  return acc;
}, {});

function getJsonOrThrow(response) {
  return response.json().then((data) => {
    if (!response.ok) {
      throw new Error(data?.error || "Request failed");
    }
    return data;
  });
}

export function normalizeCategory(inputCategory) {
  const key = (inputCategory || "").trim().toLowerCase();
  return normalizedCategoryMap[key] || "General";
}

export async function getStoredPosts({ published = true } = {}) {
  const query = published ? "?published=true" : "?published=all";
  const response = await fetch(`/api/blogs${query}`);
  const data = await getJsonOrThrow(response);
  return data.posts || [];
}

export async function getPostByIdOrSlug(idOrSlug) {
  const response = await fetch(`/api/blogs/${encodeURIComponent(idOrSlug)}`);
  const data = await getJsonOrThrow(response);
  return data.post;
}

export async function createPost(payload) {
  const response = await fetch("/api/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await getJsonOrThrow(response);
  return data.post;
}

export async function updatePost(idOrSlug, payload) {
  const response = await fetch(`/api/blogs/${encodeURIComponent(idOrSlug)}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await getJsonOrThrow(response);
  return data.post;
}

export async function deletePost(idOrSlug) {
  const response = await fetch(`/api/blogs/${encodeURIComponent(idOrSlug)}`, {
    method: "DELETE",
  });
  await getJsonOrThrow(response);
}

export async function incrementPostView(idOrSlug) {
  const response = await fetch(`/api/blogs/${encodeURIComponent(idOrSlug)}/view`, {
    method: "POST",
  });
  const data = await getJsonOrThrow(response);
  return data.post;
}

export async function likePost(idOrSlug) {
  const response = await fetch(`/api/blogs/${encodeURIComponent(idOrSlug)}/like`, {
    method: "POST",
  });
  const data = await getJsonOrThrow(response);
  return data.post;
}

export async function addPostComment(idOrSlug, payload) {
  const response = await fetch(`/api/blogs/${encodeURIComponent(idOrSlug)}/comment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await getJsonOrThrow(response);
  return data.post;
}

export async function seedBlogPosts() {
  const response = await fetch("/api/blogs/seed", { method: "POST" });
  return getJsonOrThrow(response);
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

export function markPostLiked(postId) {
  const ids = getLikedPostIds();
  if (ids.includes(postId)) return ids;
  const next = [...ids, postId];
  saveStoredIdList(BLOG_LIKED_KEY, next);
  return next;
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

export function getCommentAuthorName() {
  if (typeof window === "undefined") return "Guest User";
  const userName = localStorage.getItem("userName");
  if (userName && userName.trim()) return userName.trim();
  return "Guest User";
}
