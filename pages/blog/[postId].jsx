import dynamic from "next/dynamic";

const BlogDetail = dynamic(() => import("../../src/components/Blog/BlogDetail"), {
  ssr: false,
});

export default function BlogDetailPage() {
  return <BlogDetail />;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}
