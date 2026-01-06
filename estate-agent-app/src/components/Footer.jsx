import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>EstateAgent</h3>
          <p>
            A modern property listing platform designed for easy searching and
            exploration of houses and flats.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/property">Properties</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@estateagent.com</p>
          <p>Phone: +94 77 123 4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} EstateAgent. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
