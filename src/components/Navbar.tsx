import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false); // State to toggle the hamburger menu

  useEffect(() => {
    setIsOpen(false); // Close the menu whenever the route changes
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu when the hamburger icon is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand ms-4" href="#">
          <img
            src="/images/initialImg.png"
            alt="Initials"
            className="navbar-logo"
            style={{ height: "20px", marginRight: "10px" }}
          />
          Talia Joy Frendl
        </a>

        {/* Display hamburger on smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} // Apply 'show' class when menu is open
          id="navbarNav"
          style={{
            backgroundColor: isOpen
              ? "rgba(255, 255, 255, 0.9)"
              : "transparent", // Light background when open
            padding: "10px",
            borderRadius: "5px",
            boxShadow: isOpen ? "0px 4px 6px rgba(0,0,0,0.1)" : "",
          }}
        >
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
