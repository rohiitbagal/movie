import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              Movies
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/movies/popular" className="nav-link" href="#">
                  Popular
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movies/top-rated" className="nav-link" href="#">
                  Top rated
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movies/upcoming" className="nav-link" href="#">
                  upcoming
                </NavLink>
              </li>

              {isAuthenticated ? (
                <li>
                  <button
                    type="button"
                    class="btn btn-info"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                </li>
              )}

              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
