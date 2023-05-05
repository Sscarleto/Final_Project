import Link from "next/link";

export function ClienteDetails({ client }) {
  return (
    <div className="row p-5">
      <div className="col-6">
        <h3 className="p-2">Client Details:</h3>
        <div className="mb-3">
          <label className="p-2">Name: </label>
          <input value={client.name}></input>
        </div>
        <div className="mb-3">
          <label className="p-2">Email: </label>
          <input value={client.email}></input>
        </div>
        <div className="mb-3">
          <label className="p-2">Phone: </label>
          <input value={client.phone}></input>
        </div>
        <div className="mb-3">
          <label className="p-2">WebSite: </label>
          <input value={client.website}></input>
        </div>
      </div>
    </div>
  );
}
