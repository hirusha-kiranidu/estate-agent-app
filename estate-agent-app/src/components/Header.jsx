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
          <a href="/search">Search</a>
          <a href="/property/1">Properties</a>
          <a href="/favourite">Favourite</a>
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
          <a href="/search" onClick={() => setMenuOpen(false)}>Search</a>
          <a href="/property/1" onClick={() => setMenuOpen(false)}>Properties</a>
          <a href="/favourite" onClick={() => setMenuOpen(false)}>Favourite</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
