import { Link } from "react-router-dom";
import Avatar from "./avatar";
import { useContext } from "react";
import { routes } from "../router/routes";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { user, logout } = useContext(UserContext);
  const name: string | null = user?.username || null;

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
          {user && (
            <div className="flex">
              <Avatar name={name} />
              <button onClick={logout} className="main-button">
                Logout
              </button>
            </div>
          )}
          {!user && (
            <Link className="main-button" to={routes.login}>
              Login/Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
