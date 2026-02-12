import dynamic from "next/dynamic";

const FavoriteBlogs = dynamic(() => import("../../src/components/Blog/FavoriteBlogs"), {
  ssr: false,
});

export default function FavoriteBlogsPage() {
  return <FavoriteBlogs />;
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60,
  };
}
