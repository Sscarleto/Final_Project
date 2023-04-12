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
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Client</th>
                <th scope="col">Done</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((project) => {
                  return (
                    <tr>
                      <td></td>
                      <td>{project.name}</td>
                      <td>{project.clients.name}</td>
                      <td>{project.completed ? "YES" : "NO"} </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
      <div className="col-12 d-flex justify-content-end p-2 gap-3">
          <Link className="btn btn-success" href="/addproject">
            Add Project
          </Link>
          <Link className="btn btn-success" href="/addclient">
            Add Client
          </Link>
        </div>
      </div>
    </div>
  );
};
