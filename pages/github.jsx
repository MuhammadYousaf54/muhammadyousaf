import Github, { githubInfoLoader } from "../src/components/Github/Github";

export default function GithubPage({ githubData }) {
  return <Github data={githubData} />;
}

export async function getServerSideProps() {
  try {
    const githubData = await githubInfoLoader();
    return { props: { githubData } };
  } catch (error) {
    return { props: { githubData: null } };
  }
}
