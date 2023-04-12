import { useSecurePage } from "@/lib/useSecurePage";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { AddClient } from "@/components/AddClient";

const AddClientPage = () => {
  return (
    <div>
      <NavBar />
      <AddClient />
      <Footer />
    </div>
  );
};

export default AddClientPage;
