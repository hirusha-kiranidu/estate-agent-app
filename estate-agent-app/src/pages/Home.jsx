import "./Home.css";

function Home() {
  return (
    <main className="home-main">
      <section className="home-section">
        <div className="home-text">
          <h1>Welcome to EstateAgent</h1>
          <p>
            Discover trusted properties, explore locations, and find your next
            home with confidence and ease.
          </p>
        </div>

        <div className="home-image">
          <img src="/images/home-main.png" alt="Home illustration" />
        </div>
      </section>

      <section className="howto-section">

        {/* Center navigation button */}

        <div className="howto-cta">
          <a href="/property"> Property</a>
        </div>
        <h2 className="howto-title">How To Use</h2>
        <div className="howto-cardSection">

          {/* View Search Card */}

          <div className="howto-card">
            <h3>Search for Properties</h3>
            <p>
              Use the search page to filter properties by type, price range,
              number of bedrooms, date added, and postcode area. You can apply
              one or multiple criteria at the same time to refine your results.
            </p>
            <a href="/property">Go to Search</a>
          </div>

          {/* View Favourites Card */}

          <div className="howto-card">
            <h3>Save to Favourites</h3>
            <p>
              When browsing search results or property details, you can save
              properties to your favourites list. This allows you to compare and
              revisit selected properties easily.
            </p>
            <a href="/property">View Favourites</a>
          </div>

          {/* View Details Card */}

          <div className="howto-card">
            <h3>View Property Details</h3>
            <p>
              Select a property to view detailed information including images,
              price, location, and additional descriptions. Each property page
              provides a clear overview to support decision making.
            </p>
            <a href="/property">View Details</a>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
