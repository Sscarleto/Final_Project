import Link from "next/link";

export function ProjectProperty({ projects }) {
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{projects.name}</h5>
          <h5 className="card-title">{projects.time_life}</h5>
          <h5 className="card-title">{projects.needed_devs}</h5>
          <h5 className="card-title">{projects.cost}</h5>
        </div>
      </div>
      <label className="p-2">Done</label>
      <input type="checkbox" />
      <div className="col-12 d-flex justify-content-end p-2 gap-3">
          <Link className="btn btn-danger" href="/">
            Cancel
          </Link>
          <Link className="btn btn-success" href="/">
            Update
          </Link>
        </div>
    </div>
  );
}
