import React from "react";
import { sendEmail } from "@/lib/email";
import { useForm } from "react-hook-form";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMutation } from "@tanstack/react-query";
import { Router, useRouter } from "next/router";

export function FreeLance() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const supabase = useSupabaseClient();
  const router = useRouter();
  const createDeveloper = async (payload) => {
    const { data, error } = await supabase.from("developers").insert([payload]);
    if (data) {
      sendEmail(
        payload.email,
        payload.name,
        payload.twitter,
        payload.github,
        payload.linkedin
      );
    }
  };

  const mutation = useMutation({
    mutationFn: createDeveloper,
  });

  const onSubmit = async (data) => {
    await mutation.mutateAsync(data);
    router.push("/");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h1 className="text-center">Apply To Developer</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                className="form-control"
                placeholder="example@domain.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Twitter
              </label>
              <input
                {...register("twitter")}
                type="text"
                name="twitter"
                className="form-control"
                placeholder="@twitter"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                LinkedIn
              </label>
              <input
                {...register("linkedin")}
                type="text"
                name="linkedin"
                className="form-control"
                placeholder="@linkedin"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                GitHub
              </label>
              <input
                {...register("github")}
                type="text"
                name="github"
                className="form-control"
                placeholder="@github"
              />
            </div>
            <div className="row d-flex">
              <button
                type="submit"
                className="btn col-12 justify-content-end p-2 btn-primary"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
