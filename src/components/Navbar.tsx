import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar nabvar-expand-lg navbar-light fs-5">
      <div className="container-fluid">
        <a className="navbar-brand ms-4" href="#">
          <img
            src="/myPortfolio/images/initialImg.png"
            alt="Initials"
            className="navbar-logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
          Talia Joy Frendl
        </a>

        {/* Navigation Links */}
        <div className="d-flex align-items-center">
          <NavLink
            to="/myPortfolio/"
            className={({ isActive }) =>
              isActive ? "nav-link mx-3 outline-current-page" : "nav-link mx-3"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/myPortfolio/projects"
            className={({ isActive }) =>
              isActive ? "nav-link mx-3 outline-current-page" : "nav-link mx-3"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/myPortfolio/about"
            className={({ isActive }) =>
              isActive ? "nav-link mx-3 outline-current-page" : "nav-link mx-3"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/myPortfolio/contact"
            className={({ isActive }) =>
              isActive ? "nav-link mx-3 outline-current-page" : "nav-link mx-3"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
