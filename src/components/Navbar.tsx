import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar nabvar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Talia Joy Frendl
        </a>

        {/* Navigation Links */}
        <div className="d-flex">
          <Link to="/" className="nav-link mx-3">
            Home
          </Link>
          <Link to="/projects" className="nav-link mx-3">
            Projects
          </Link>
          <Link to="/about" className="nav-link mx-3">
            About
          </Link>
          <Link to="/contact" className="nav-link mx-3">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
