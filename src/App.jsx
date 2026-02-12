import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Github, { githubInfoLoader } from "./components/Github/Github";
import About from "./components/About/About";
import User from "./components/User/User";
import Login from "./components/Login/Login";
import OurServices from "./components/OurServices/OurServices";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Blog from "./components/Blog/Blog";
import BlogDetail from "./components/Blog/BlogDetail";
import BlogAdminDashboard from "./components/Blog/BlogAdminDashboard";
import FavoriteBlogs from "./components/Blog/FavoriteBlogs";
import { FaWhatsapp } from "react-icons/fa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "contact", element: <Contact /> },
      { path: "github", element: <Github />, loader: githubInfoLoader },
      { path: "about", element: <About /> },
      { path: "user/:userid", element: <User /> },
      { path: "services", element: <OurServices /> },
      { path: "service/:serviceId", element: <ServiceDetail /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/favorites", element: <FavoriteBlogs /> },
      { path: "blog/:postId", element: <BlogDetail /> },
      { path: "blog/admin", element: <BlogAdminDashboard /> },
    ]
  }
]);

function Layout() {
  return (
    <>
      <ScrollToTop />
      <RouteSEO />
      <Header />
      <Outlet />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function RouteSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const siteUrl = "https://muhammadyousaf.vercel.app";
    const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
    const url = `${siteUrl}${normalizedPath === "/" ? "/" : normalizedPath}`;

    const seoByRoute = {
      "/": {
        title: "Muhammad Yousaf | Full Stack Developer & AI Automation Expert",
        description:
          "Portfolio of Muhammad Yousaf, Full Stack Developer specializing in MERN stack, AI automation, and scalable web applications.",
      },
      "/about": {
        title: "About | Muhammad Yousaf",
        description:
          "Learn about Muhammad Yousaf's experience in web development, AI automation, data analysis, and digital solutions.",
      },
      "/services": {
        title: "Services | Muhammad Yousaf",
        description:
          "Explore web development, AI automation, digital marketing, and data analysis services by Muhammad Yousaf.",
      },
      "/contact": {
        title: "Contact | Muhammad Yousaf",
        description: "Contact Muhammad Yousaf for full-stack development, AI automation, and business web solutions.",
      },
      "/github": {
        title: "GitHub Profile | Muhammad Yousaf",
        description: "View Muhammad Yousaf's GitHub repositories and development activity.",
      },
      "/blog": {
        title: "Blog | Muhammad Yousaf",
        description: "Read articles on React, AI automation, web development, and software best practices.",
      },
      "/blog/favorites": {
        title: "Favorite Blogs | Muhammad Yousaf",
        description: "Saved and favorite articles by Muhammad Yousaf.",
      },
      "/login": {
        title: "Login | Muhammad Yousaf",
        description: "Login page for admin and user access.",
      },
    };

    const routeSEO = seoByRoute[normalizedPath] || {
      title: "Muhammad Yousaf | Full Stack Developer",
      description:
        "Muhammad Yousaf portfolio featuring web development, MERN stack projects, and AI automation solutions.",
    };

    const noIndexPaths = ["/blog/admin"];
    const isNoIndex = noIndexPaths.some((path) => normalizedPath.startsWith(path));
    const robotsContent = isNoIndex ? "noindex, nofollow" : "index, follow";

    document.title = routeSEO.title;

    const updateMetaByName = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const updateMetaByProperty = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    updateMetaByName("description", routeSEO.description);
    updateMetaByName("robots", robotsContent);
    updateMetaByName("googlebot", `${robotsContent}, max-image-preview:large`);
    updateMetaByProperty("og:title", routeSEO.title);
    updateMetaByProperty("og:description", routeSEO.description);
    updateMetaByProperty("og:url", url);
    updateMetaByProperty("og:type", "website");
  }, [pathname]);

  return null;
}

function App() {
  return <RouterProvider router={router} />;
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923336005482"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
      title="Connect on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" aria-hidden="true" />
    </a>
  );
}

export default App;
