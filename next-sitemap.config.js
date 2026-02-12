/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://muhammadyousaf.vercel.app",
  outDir: "public",
  generateRobotsTxt: true,
  staticPaths: [
    "/",
    "/about",
    "/services",
    "/contact",
    "/github",
    "/blog",
    "/blog/favorites",
    "/login",
    "/service/web-development",
    "/service/ai-automation",
    "/service/digital-marketing",
    "/service/data-analysis",
  ],
};

export default config;
