import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light fs-5">
      <div className="container-fluid">
        <a className="navbar-brand ms-4" href="#">
          <img
            src="/images/initialImg.png"
            alt="Initials"
            className="navbar-logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
          Talia Joy Frendl
        </a>

        {/* Display hamburger on smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link mx-3 outline-current-page"
                    : "nav-link mx-3"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link mx-3 outline-current-page"
                    : "nav-link mx-3"
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link mx-3 outline-current-page"
                    : "nav-link mx-3"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link mx-3 outline-current-page"
                    : "nav-link mx-3"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
