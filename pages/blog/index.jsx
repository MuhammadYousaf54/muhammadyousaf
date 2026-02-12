import dynamic from "next/dynamic";

const Blog = dynamic(() => import("../../src/components/Blog/Blog"), {
  ssr: false,
});

export default function BlogPage() {
  return <Blog />;
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}
