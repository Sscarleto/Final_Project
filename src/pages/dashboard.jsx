import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { useSecurePage } from "@/lib/useSecurePage";
import { DashboardNav } from "@/components/DashboardNav";

const Dashboard = () => {
  useSecurePage();

  return (
    <div>
      <NavBar />
      <DashboardNav />
      <Footer />
    </div>
  );
};

export default Dashboard;
