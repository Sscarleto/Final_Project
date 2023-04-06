import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export const Add = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const user = useUser();
  const supabase = useSupabaseClient();
  const createProject = async (payload) => {
    const { data, error } = await supabase.from("projects").insert([
      {
        ...payload,
        completed: false,
        user_id: user.id,
        client_id: "0a683cb2-05d3-4ae3-9ce8-0fcacae0aa39",
      },
    ]);
  };

  const mutation = useMutation({
    mutationFn: createProject,
  });

  const onSubmit = async (data) => {
    await mutation.mutateAsync(data);
    router.push("/dashboard");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-3">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Time Life
              </label>
              <input
                {...register("time_life", {
                  valueAsNumber: true,
                })}
                type="number"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Weeks"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Numbers of Developers
              </label>
              <input
                {...register("needed_devs", {
                  valueAsNumber: true,
                })}
                type="number"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="# Developers"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Cost
              </label>
              <input
                {...register("cost", {
                  valueAsNumber: true,
                })}
                type="number"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="0000.00"
              />
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
};
