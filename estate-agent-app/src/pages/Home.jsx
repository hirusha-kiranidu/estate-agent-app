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
    </main>
  );
}

export default Home;
