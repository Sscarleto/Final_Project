import { useState } from "react";
import { ListProjects } from "./ListProjects";
import { ListClients } from "./ListClients";

export const DashboardNav = () => {
  const [tab, setTab] = useState("projects");

  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className={"nav-link " + (tab === "projects" ? "active" : "")}
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={() => {
              setTab("projects");
            }}
          >
            Projects
          </button>

          <button
            className={"nav-link " + (tab === "clients" ? "active" : "")}
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
            onClick={() => {
              setTab("clients");
            }}
          >
            Clients
          </button>

          <button
            className={"nav-link " + (tab === "developers" ? "active" : "")}
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
            onClick={() => {
              setTab("developers");
            }}
          >
            Developers
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={
            "tab-pane fade show p-3 " + (tab === "projects" ? "active" : "")
          }
          id="nav-home"
          role="tabpanel"
          aria-aria-labelledby="nav-home-tab"
        >
          <ListProjects />
        </div>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={
            "tab-pane fade show p-3 " + (tab === "clients" ? "active" : "")
          }
          id="nav-home"
          role="tabpanel"
          aria-aria-labelledby="nav-home-tab"
        >
          <ListClients />
        </div>
      </div>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={
            "tab-pane fade show p-3 " + (tab === "developers" ? "active" : "")
          }
          id="nav-home"
          role="tabpanel"
          aria-aria-labelledby="nav-home-tab"
        >
          Listar developers
        </div>
      </div>
    </>
  );
};
