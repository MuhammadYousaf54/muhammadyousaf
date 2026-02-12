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
