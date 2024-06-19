import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div>
          <div className="nav-left">
            <Link className="nav-logo" to="/">
              <img src="/vite.svg" alt="company-logo" />
            </Link>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/services">
              Services
            </Link>
            <Link className="nav-link" to="/about-us">
              About Us
            </Link>
          </div>
        </div>
        <div>
          <Link className="nav-button" to="/login">
            Login/Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
