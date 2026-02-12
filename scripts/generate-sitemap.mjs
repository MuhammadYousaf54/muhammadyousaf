import fs from "node:fs";
import path from "node:path";
import config from "../next-sitemap.config.js";

const siteUrl = (config.siteUrl || "").replace(/\/+$/, "");
const outDir = config.outDir || "dist";
const paths = Array.isArray(config.staticPaths) ? config.staticPaths : ["/"];

if (!siteUrl) {
  console.error("Sitemap generation failed: siteUrl is missing in next-sitemap.config.js");
  process.exit(1);
}

const outputDir = path.resolve(process.cwd(), outDir);
if (!fs.existsSync(outputDir)) {
  console.error(`Sitemap generation failed: output directory not found: ${outputDir}`);
  process.exit(1);
}

const now = new Date().toISOString();

const urlEntries = paths
  .map((route) => {
    const normalized = route.startsWith("/") ? route : `/${route}`;
    const loc = `${siteUrl}${normalized === "/" ? "" : normalized}`;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${normalized === "/" ? "1.0" : "0.8"}</priority>\n  </url>`;
  })
  .join("\n");

const sitemapXml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urlEntries}\n` +
  `</urlset>\n`;

fs.writeFileSync(path.join(outputDir, "sitemap.xml"), sitemapXml, "utf8");

if (config.generateRobotsTxt) {
  const robotsTxt =
    `User-agent: *\n` +
    `Allow: /\n\n` +
    `Sitemap: ${siteUrl}/sitemap.xml\n`;
  fs.writeFileSync(path.join(outputDir, "robots.txt"), robotsTxt, "utf8");
}

console.log(`Sitemap generated at ${path.join(outputDir, "sitemap.xml")}`);
if (config.generateRobotsTxt) {
  console.log(`Robots.txt generated at ${path.join(outputDir, "robots.txt")}`);
}
