import ClientOnly from "@/components/clientonly";
import Layout from "@/components/dashboardnavigation";
const Dashboard = () => {
  return (
    <ClientOnly>
      <Layout />
    </ClientOnly>
  );
};

export default Dashboard;
