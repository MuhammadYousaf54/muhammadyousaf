import User from "../../src/components/User/User";

export default function UserPage() {
  return <User />;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
