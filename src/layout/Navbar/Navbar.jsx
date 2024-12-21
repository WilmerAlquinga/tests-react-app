import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("/");

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Demo App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${activePath === "/" ? "active" : ""}`}>
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className={`nav-item ${activePath === "/people" ? "active" : ""}`}>
              <a className="nav-link" href="/people">
                People
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${activePath.includes("/files") ? "active" : ""}`}
                href="/files/images"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Files
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/files/images">
                  Images
                </a>
              </div>
            </li>
            <li className={`nav-item dropdown ${activePath.includes("/functions") ? "active" : ""}`}>
              <a
                className="nav-link dropdown-toggle"
                href="/functions/set-interval"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Functions
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/functions/set-interval">
                  SetInterval
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-success my-2 my-sm-0"
              type="button"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
