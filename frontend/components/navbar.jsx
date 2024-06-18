export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div>
          <div className="nav-left">
            <a className="nav-logo" href="/">
              <img src="/vite.svg" alt="company-logo" />
            </a>
            <a className="nav-link" href="/">
              Home
            </a>
            <a className="nav-link" href="/">
              Services
            </a>
            <a className="nav-link" href="/">
              About Us
            </a>
          </div>
        </div>
        <div>
          <a className="nav-button" href="/">
            Login/Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
