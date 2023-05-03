import { useForm } from "react-hook-form";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export function Add() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const user = useUser();
  const supabase = useSupabaseClient();
  const getClients = async () => {
    let { data: clients, error } = await supabase
      .from("clients")
      .select("*")
      .eq("user_id", user.id);
    return clients;
  };
  const createProject = async (payload) => {
    const { data, error } = await supabase.from("projects").insert([
      {
        ...payload,
        completed: false,
        user_id: user.id,
      },
    ]);
  };

  const clients = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
    initialData: [],
    enabled: !!user,
  });

  const mutation = useMutation({
    mutationFn: createProject,
  });

  const onSubmit = async (data) => {
    await mutation.mutateAsync(data);
    router.push("/dashboard");
  };

  return (
    <div className="container">
      <h1 className="text-center p-2">Add Project</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row justify-content-center p-2">
          <div className="col-3">
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Time Life
              </label>
              <input
                {...register("time_life", {
                  valueAsNumber: true,
                })}
                type="number"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Weeks"
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Numbers of Developers
              </label>
              <input
                {...register("needed_devs", {
                  valueAsNumber: true,
                })}
                type="number"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="# Developers"
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Cost
              </label>
              <input
                {...register("cost", {
                  valueAsNumber: true,
                })}
                type="number"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="0000.00"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="client_id" className="form-label">
                Client
              </label>
              <select
                {...register("client_id")}
                className="form-control"
                id="client_id"
              >
                {clients.data.map((client) => {
                  return (
                    <option value={client.id} key={client.id}>
                      {client.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-12 d-flex justify-content-end p-2 gap-3">
              <a className="btn btn-danger" href="/dashboard">
                Cancel
              </a>
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
      </div>
  );
}
