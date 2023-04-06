import { ListProjects } from "@/components/ListProjects";
import { NavBar } from "@/components/NavBar";
import { useSecurePage } from "@/lib/useSecurePage";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Add } from "@/components/Add";
import { Footer } from "@/components/Footer";

const AddProject = () => {
  useSecurePage("/addproject");
  const supabase = useSupabaseClient();

  return (
    <div>
      <NavBar />
      <Add />
      <Footer />
    </div>
  );
};

export default AddProject;
