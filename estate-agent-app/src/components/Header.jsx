import "./Header.css";

function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
                <div className="logo">
                    <img src="/images/logo.png" alt="EstateAgent logo" />
                    <span>EstateAgent</span>
                </div>
                <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="/search">Search</a>
                    <a href="/property">Properties</a>
                    <a href="/favourite">Favourite</a>
                </nav>
            </div>

        </header>
    )
}

export default Header;