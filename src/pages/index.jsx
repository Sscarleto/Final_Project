import Link from "next/link";
import { ListProjects } from "@/components/ListProjects";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  );
}
