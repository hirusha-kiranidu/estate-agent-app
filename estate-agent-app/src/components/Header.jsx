import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">  
          <img src="/images/logo.png" alt="EstateAgent logo" />
          <span>EstateAgent</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/property">Properties</a>
          <a href="/Contact">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mobile-nav">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/About" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/property" onClick={() => setMenuOpen(false)}>Properties</a>
          <a href="/Contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
