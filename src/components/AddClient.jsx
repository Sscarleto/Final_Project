import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export function AddClient() {

    const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const user = useUser();
  const supabase = useSupabaseClient();
  const createClient = async (payload) => {
    const { data, error } = await supabase.from("clients").insert([
      {
        ...payload,
        user_id: user.id,
      },
    ]);
  };

  const mutation = useMutation({
    mutationFn: createClient,
  });

  const onSubmit = async (data) => {
    await mutation.mutateAsync(data);
    router.push("/dashboard");
  };

  return (
    <div className="container">
      <h1>Add Client</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
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
                email
              </label>
              <input
                {...register("email", {
                  valueAsNumber: true,
                })}
                type="email"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="example@dom.com"
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Phone Number
              </label>
              <input
                {...register("phone", {
                  valueAsNumber: true,
                })}
                type="number"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder=""
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                WebSite
              </label>
              <input
                {...register("website", {
                  valueAsNumber: true,
                })}
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="www.dominio.com"
              />
            </div>
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
      </form>
    </div>
  );
}
