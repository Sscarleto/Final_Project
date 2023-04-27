import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";

export const ListDevelopers = () => {
  const supabase = useSupabaseClient();
  const getDevelopers = async () => {
    let { data: developers, error } = await supabase
      .from("developers")
      .select("*");
    console.log(error);
    return developers;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["developers"],
    queryFn: getDevelopers,
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">email</th>
                <th scope="col">LinkedIn</th>
                <th scope="col">GitHub</th>
                <th scope="col">Twitter</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((developer) => {
                  return (
                    <tr>
                      <td>{developer.name}</td>
                      <td>{developer.email}</td>
                      <td>{developer.linkedin} </td>
                      <td>{developer.github} </td>
                      <td>{developer.twitter} </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
