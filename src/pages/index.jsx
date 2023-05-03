import Link from "next/link";
import { ListProjects } from "@/components/ListProjects";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { FreeLance } from "@/components/FreeLance";

export default function Home() {
  return (
    <div className="container">
      <NavBar />
      <h1 className="display-3">DevProjects</h1>
      <Footer />
    </div>
  );
}
