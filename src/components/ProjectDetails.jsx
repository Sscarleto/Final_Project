import { useSupabaseClient } from "@supabase/auth-helpers-react";

export function ProjectProperty({ projects, refetch }) {
  const supabase = useSupabaseClient();
  const handleComplete = async () => {
    await supabase
      .from("projects")
      .update({ completed: true })
      .eq("id", projects.id);
    refetch();
  };

  return (
    <div className="row p-5">
      <div className="col-6">
        {projects.completed && (
          <div className="alert alert-success" role="alert">
            This project is completed!
          </div>
        )}
        <h3 className="p-2">Projects Details:</h3>
        <div className="mb-3">
          <label className="p-2">Name: </label>
          <input value={projects.name}></input>
        </div>
        <div className="mb-3">
          <label className="p-2">Time Life: </label>
          <input value={projects.time_life}></input>
        </div>
        <div className="mb-3">
          <label className="p-2">Needed Developers: </label>
          <input className="col-2" value={projects.needed_devs}></input>
        </div>
        <div className="mb-3">
          <label className="p-2">Cost: </label>
          <input className="col-4" value={projects.cost}></input>
        </div>
      </div>
      <div className="col-6">
        <button className="btn btn-primary" onClick={handleComplete}>
          Complete Project
        </button>
      </div>
    </div>
  );
}
