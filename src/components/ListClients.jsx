import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";

export const ListClients = () => {
  const supabase = useSupabaseClient();
  const getClients = async () => {
    let { data: clients, error } = await supabase.from("clients").select("*");
    console.log(error);
    return clients;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">WebSite</th>
                <th scope="col">Client Since</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((client) => {
                  return (
                    <tr>
                      <td>{client.name}</td>
                      <td>{client.phone}</td>
                      <td>{client.email} </td>
                      <td>{client.website} </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="row">
            <div className="col-12 d-flex justify-content-end p-2 gap-3">
              <Link className="btn btn-success" href="/addclient">
                Add Client
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
