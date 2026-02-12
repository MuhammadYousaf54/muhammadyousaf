import { categories, normalizeCategory } from "./blogStorage";

const DEFAULT_MODEL = import.meta.env.VITE_OPENAI_MODEL || "gpt-4.1-mini";
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export function isOpenAIConfigured() {
  return Boolean(OPENAI_API_KEY);
}

function trimText(value) {
  return (value || "").trim();
}

function normalizeFieldValue(field, value) {
  if (field === "category") return normalizeCategory(value);
  if (field === "date") {
    const maybeDate = new Date(value);
    if (Number.isNaN(maybeDate.getTime())) return new Date().toISOString().slice(0, 10);
    return maybeDate.toISOString().slice(0, 10);
  }
  return trimText(value);
}

function fallbackSuggestion(mode, form) {
  const category = normalizeCategory(form.category);
  const baseTitle = trimText(form.title) || `Practical Insights in ${category}`;
  const baseExcerpt =
    trimText(form.excerpt) ||
    `A practical guide to ${category.toLowerCase()} with clear steps, common pitfalls, and real-world examples.`;
  const baseContent =
    trimText(form.content) ||
    `Introduction\n\n${category} is evolving quickly. This article breaks down key concepts and practical actions.\n\nMain Points\n\n1. Start with clear goals.\n2. Choose tools based on outcomes, not trends.\n3. Measure progress and iterate.\n\nConclusion\n\nUse these ideas to build reliable momentum in your projects.`;

  if (mode === "title") {
    return { title: `${baseTitle} for 2026`, category };
  }

  if (mode === "excerpt") {
    return { excerpt: baseExcerpt, category };
  }

  if (mode === "improve") {
    return {
      title: baseTitle,
      excerpt: baseExcerpt,
      content: `${baseContent}\n\nAction Plan\n\n- Define one measurable target.\n- Ship one improvement this week.\n- Review and refine based on feedback.`,
      category,
    };
  }

  return { title: baseTitle, excerpt: baseExcerpt, content: baseContent, category };
}

function buildPrompt(mode, form) {
  const selectedCategory = normalizeCategory(form.category);
  const allowedCategories = categories.join(", ");
  return `You are a blog writing assistant.
Return ONLY valid JSON with keys: title, excerpt, content, category.
Category must be exactly one of: ${allowedCategories}.
Mode: ${mode}
Selected category: ${selectedCategory}
Current draft:
Title: ${trimText(form.title)}
Excerpt: ${trimText(form.excerpt)}
Content: ${trimText(form.content)}

Instructions by mode:
- draft: create a complete, high-quality blog draft.
- improve: improve and expand the existing draft while keeping topic and category aligned.
- title: suggest only a stronger title (still return full JSON keys, leave unchanged fields as current values if needed).
- excerpt: suggest only a stronger excerpt (still return full JSON keys, leave unchanged fields as current values if needed).
`;
}

function sanitizeAIResponse(result, form) {
  return {
    title: trimText(result.title) || trimText(form.title),
    excerpt: trimText(result.excerpt) || trimText(form.excerpt),
    content: trimText(result.content) || trimText(form.content),
    category: normalizeCategory(result.category || form.category),
  };
}

export async function getAIBlogSuggestion(mode, form) {
  if (!OPENAI_API_KEY) {
    return fallbackSuggestion(mode, form);
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        temperature: 0.7,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: "You are a professional blog writing assistant. Return strict JSON only.",
          },
          {
            role: "user",
            content: buildPrompt(mode, form),
          },
        ],
      }),
    });

    if (!response.ok) {
      const fallback = fallbackSuggestion(mode, form);
      return { ...fallback, _fallback: true };
    }

    const payload = await response.json();
    const raw = payload?.choices?.[0]?.message?.content;
    const parsed = raw ? JSON.parse(raw) : {};
    return sanitizeAIResponse(parsed, form);
  } catch {
    const fallback = fallbackSuggestion(mode, form);
    return { ...fallback, _fallback: true };
  }
}

function fallbackFieldSuggestion(field, form, instruction) {
  const cleanInstruction = trimText(instruction).toLowerCase();
  const category = normalizeCategory(form.category);

  if (field === "title") {
    return normalizeFieldValue(field, `${trimText(form.title) || category} - ${cleanInstruction || "practical guide"}`);
  }
  if (field === "excerpt") {
    return normalizeFieldValue(
      field,
      trimText(form.excerpt) || `A clear and practical overview of ${category.toLowerCase()} for modern teams.`
    );
  }
  if (field === "content") {
    return normalizeFieldValue(
      field,
      trimText(form.content) ||
        `Introduction\n\nThis article explains ${category.toLowerCase()} with practical examples.\n\nKey Ideas\n\n1. Focus on outcomes.\n2. Build in small iterations.\n3. Measure and improve.\n\nConclusion\n\nApply one idea this week and review results.`
    );
  }
  if (field === "author") {
    return normalizeFieldValue(field, trimText(form.author) || "Muhammad Yousaf");
  }
  if (field === "category") {
    return normalizeFieldValue(field, category);
  }
  if (field === "date") {
    return normalizeFieldValue(field, new Date().toISOString().slice(0, 10));
  }

  return normalizeFieldValue(field, form[field] || "");
}

function buildFieldPrompt(field, instruction, form) {
  return `You are a field-level AI writing assistant for a blog CMS.
Return strict JSON only: {"value":"..."}.

Field to update: ${field}
Allowed categories: ${categories.join(", ")}
Current form:
title=${trimText(form.title)}
excerpt=${trimText(form.excerpt)}
content=${trimText(form.content)}
category=${normalizeCategory(form.category)}
author=${trimText(form.author)}
date=${trimText(form.date)}

User instruction:
${trimText(instruction) || "Improve this field for readability, clarity, and SEO while staying accurate."}
`;
}

export async function getAIFieldSuggestion(field, instruction, form) {
  if (!OPENAI_API_KEY) {
    return { value: fallbackFieldSuggestion(field, form, instruction), _fallback: true };
  }

  try {
    let response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        temperature: 0.7,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: "You are a concise blog editor. Output strict JSON only.",
          },
          {
            role: "user",
            content: buildFieldPrompt(field, instruction, form),
          },
        ],
      }),
    });

    if (!response.ok) {
      // Retry with a safe model fallback before using local fallback.
      response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          temperature: 0.7,
          response_format: { type: "json_object" },
          messages: [
            {
              role: "system",
              content: "You are a concise blog editor. Output strict JSON only.",
            },
            {
              role: "user",
              content: buildFieldPrompt(field, instruction, form),
            },
          ],
        }),
      });
      if (!response.ok) {
        return { value: fallbackFieldSuggestion(field, form, instruction), _fallback: true };
      }
    }

    const payload = await response.json();
    const raw = payload?.choices?.[0]?.message?.content;
    const parsed = raw ? JSON.parse(raw) : {};
    return { value: normalizeFieldValue(field, parsed.value || form[field] || "") };
  } catch {
    return { value: fallbackFieldSuggestion(field, form, instruction), _fallback: true };
  }
}
