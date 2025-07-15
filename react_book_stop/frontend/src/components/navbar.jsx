import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-title">📚 Book Stop</Link>
      </div>

      <div className="navbar-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          aria-current={location.pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>
        <Link
          to="/favourites"
          className={`nav-link ${location.pathname === "/favourites" ? "active" : ""}`}
          aria-current={location.pathname === "/favourites" ? "page" : undefined}
        >
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
