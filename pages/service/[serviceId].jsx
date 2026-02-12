import ServiceDetail from "../../src/components/ServiceDetail/ServiceDetail";

export default function ServiceDetailPage() {
  return <ServiceDetail />;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
