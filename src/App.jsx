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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-8 w-8 fill-current"
        aria-hidden="true"
      >
        <path d="M19.11 17.19c-.27-.14-1.58-.78-1.82-.87-.24-.09-.41-.14-.59.14-.18.27-.68.86-.84 1.04-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.14-1.33-.79-.7-1.32-1.57-1.47-1.84-.15-.27-.02-.41.11-.55.12-.12.27-.31.41-.46.14-.15.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.59-1.42-.81-1.95-.21-.51-.43-.44-.59-.45h-.5c-.18 0-.46.07-.7.34-.24.27-.92.9-.92 2.2s.94 2.56 1.07 2.74c.14.18 1.84 2.81 4.45 3.93 2.61 1.12 2.61.75 3.08.7.47-.05 1.58-.64 1.8-1.25.22-.61.22-1.13.15-1.25-.07-.11-.25-.18-.52-.32z" />
        <path d="M16 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.25.59 4.46 1.7 6.4L3 29l6.79-1.87A12.72 12.72 0 0 0 16 28.8c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16 3.2zm0 23.3c-1.93 0-3.81-.52-5.45-1.5l-.39-.23-4.03 1.11 1.08-3.93-.25-.4A10.47 10.47 0 0 1 5.5 16C5.5 10.2 10.2 5.5 16 5.5S26.5 10.2 26.5 16 21.8 26.5 16 26.5z" />
      </svg>
    </a>
  );
}

export default App;
