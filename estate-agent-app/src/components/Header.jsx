import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} />
          <span>EstateAgent</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/property">Properties</Link>
          <Link to="/Contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mobile-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/property" onClick={() => setMenuOpen(false)}>
            Properties
          </Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
