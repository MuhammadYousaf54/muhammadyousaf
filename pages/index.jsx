import Home from "../src/components/Home/Home";

export default function HomePage() {
  return <Home />;
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
