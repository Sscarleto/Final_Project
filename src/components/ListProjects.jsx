import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import Link from "next/link";

export const ListProjects = () => {
  const supabase = useSupabaseClient();
  const getProjects = async () => {
    let { data: projects, error } = await supabase
      .from("projects")
      .select("*, clients(*)");
    console.log(error);
    return projects;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Client</th>
                <th scope="col">Time Life</th>
                <th scope="col">Needed Developers</th>
                <th scope="col">Cost $</th>
                <th scope="col">Done</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((project) => {
                  return (
                    <tr>
                      <td>
                        <Link href={`/project/${project.id}`}>
                          {project.name}
                        </Link>
                      </td>
                      <td>{project.clients.name}</td>
                      <td>{project.time_life}</td>
                      <td>{project.needed_devs}</td>
                      <td>{project.cost}</td>
                      <td>{project.completed ? "YES" : "NO"} </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="row">
            <div className="col-12 d-flex justify-content-end p-2 gap-3">
              <Link className="btn btn-success" href="/addproject">
                Add Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
