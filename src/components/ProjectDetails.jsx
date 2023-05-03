import Link from "next/link";

export function ProjectProperty({ projects }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card p-2">
            <div className="card-body">
              <h3 className="p-2">Projects Details:</h3>
              <label className="p-2">Name: </label>
              <input value={projects.name}></input>
              <label className="p-2">Time Life: </label>
              <input value={projects.time_life}></input>
              <label className="p-2">Needed Developers: </label>
              <input className="col-2" value={projects.needed_devs}></input>
              <label className="p-2">Cost: </label>
              <input className="col-4" value={projects.cost}></input>
            </div>
          </div>
          <label className="p-2">Done</label>
          <input type="checkbox" />
          </div>
          
          

          
          
          <div className="col-12 d-flex justify-content-end p-2 gap-3">
            <Link className="btn btn-danger" href="/dashboard">
              Cancel
            </Link>
            <Link className="btn btn-success" href="/">
              Update
            </Link>
          </div>
      </div>
    </div>
  );
}
