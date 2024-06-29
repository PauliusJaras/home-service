import { Link } from "react-router-dom";
import { routes } from "../router/routes";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div>
          <div className="nav-left">
            <Link className="nav-logo" to="/">
              <img src="/vite.svg" alt="company-logo" />
            </Link>
            <Link className="nav-link" to={routes.home}>
              Home
            </Link>
            <Link className="nav-link" to={routes.services}>
              Services
            </Link>
            <Link className="nav-link" to={routes.aboutUs}>
              About Us
            </Link>
          </div>
        </div>
        <div>
          <Link className="main-button" to={routes.login}>
            Login/Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
