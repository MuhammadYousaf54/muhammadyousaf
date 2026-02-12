import dynamic from "next/dynamic";

const BlogAdminDashboard = dynamic(() => import("../../src/components/Blog/BlogAdminDashboard"), {
  ssr: false,
});

export default function BlogAdminPage() {
  return <BlogAdminDashboard />;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
