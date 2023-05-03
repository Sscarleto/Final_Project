import { ClienteDetails } from "@/components/ClientDetails";
import { useQuery } from "@tanstack/react-query";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { ProjectDetails, ProjectProperty } from "@/components/ProjectDetails";

export default function ProjectPage() {
  const router = useRouter();
  const supabase = useSupabaseClient();

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
      {project && <ClienteDetails className="p-4" client={project.clients} />}
      {project && <ProjectProperty className="p-4" projects={project} />}
    </div>
  );
}
