import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";
import "../src/index.css";
import "../src/App.css";

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

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const siteUrl = "https://muhammadyousaf.vercel.app";
  const pathname = (router.asPath || "/").split("?")[0];
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const canonicalUrl = `${siteUrl}${normalizedPath === "/" ? "/" : normalizedPath}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Muhammad Yousaf | Full Stack Developer & AI Automation Expert</title>
        <meta
          name="description"
          content="Portfolio of Muhammad Yousaf, Full Stack Developer specializing in MERN stack, AI automation, and scalable web applications."
        />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="8ef289258f8176c7" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Muhammad Yousaf Portfolio" />
        <meta property="og:title" content="Muhammad Yousaf | Full Stack Developer & AI Automation Expert" />
        <meta
          property="og:description"
          content="Portfolio of Muhammad Yousaf: React, Node.js, MERN stack, AI automation, and business-focused web solutions."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://muhammadyousaf.vercel.app/profile.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammad Yousaf | Full Stack Developer & AI Automation Expert" />
        <meta
          name="twitter:description"
          content="Portfolio of Muhammad Yousaf: MERN stack development, AI automation, and scalable web applications."
        />
        <meta name="twitter:image" content="https://muhammadyousaf.vercel.app/profile.png" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Header />
      <Component {...pageProps} />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}
