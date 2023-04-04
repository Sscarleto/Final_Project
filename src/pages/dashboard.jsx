import { ListProjects } from "@/components/ListProjects";
import { NavBar } from "@/components/NavBar";
import { useSecurePage } from "@/lib/useSecurePage";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

const Dashboard = () => {
  useSecurePage();
  const supabase = useSupabaseClient();

  return (
    <div>
      <NavBar />
      <ListProjects />
    </div>
  );
};

export default Dashboard;
