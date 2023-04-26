import Link from "next/link";

export function ClienteDetails({ client }) {
  return (
    <div className="container d-flex">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{client.name}</h5>
          <h5 className="card-title">{client.email}</h5>
          <h5 className="card-title">{client.phone}</h5>
          <h5 className="card-title">{client.website}</h5>
        </div>
      </div>
    </div>
  );
}
