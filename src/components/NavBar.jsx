import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";

export const NavBar = () => {
  const user = useUser();
  const supabase = useSupabaseClient();

  return (
    <div className="d-flex justify-content-end">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse p-2"
            id="navbarTogglerDemo01"
          >
            {user ? (
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  supabase.auth.signOut();
                }}
              >
                Logout
              </button>
            ) : (
              <Link className="btn btn-outline-primary" href="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
