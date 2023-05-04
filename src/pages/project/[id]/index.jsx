import { ClienteDetails } from "@/components/ClientDetails";
import { useQuery } from "@tanstack/react-query";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { ProjectDetails, ProjectProperty } from "@/components/ProjectDetails";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { useState } from "react";

export default function ProjectPage() {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const [tab, setTab] = useState("project");

  const getProject = async () => {
    let { data: project, error } = await supabase
      .from("projects")
      .select("*, clients (*)")
      .eq("id", router.query.id)
      .single();
    return project;
  };

  const { data: project } = useQuery({
    queryKey: ["project", router.query.id],
    queryFn: getProject,
    enabled: !!router.query.id,
  });

  return (
    <div className="container">
      <NavBar />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={"nav-link " + (tab === "project" ? "active" : "")}
            aria-current="page"
            href="#"
          >
            Project
          </a>
        </li>
        <li className="nav-item">
          <a
            className={"nav-link" + (tab === "client" ? "client" : "")}
            href="#"
          >
            Client
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Developers
          </a>
        </li>
      </ul>
      <div>
        {project && <ClienteDetails className="p-4" client={project.clients} />}
        {project && <ProjectProperty className="p-4" projects={project} />}
      </div>
      <Footer />
    </div>
  );
}
