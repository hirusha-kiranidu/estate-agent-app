import "./About.css";

function About() {
  return (
    <main className="about-page">
      <h1 className="about-title">About Us</h1>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a modern estate agency platform designed to help users explore,
          search, and manage property listings efficiently. Our goal is to
          provide a simple and user-friendly experience for finding houses and
          flats.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <p>
          Our platform allows users to browse properties, filter listings based
          on their preferences, save favourite properties, and view detailed
          information including images and descriptions.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          We aim to simplify the property search process by combining clean
          design, intuitive navigation, and modern web technologies.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us</h2>
        <p>
          With a focus on usability and performance, our application ensures
          users can easily explore property options and make informed decisions
          without unnecessary complexity.
        </p>
      </section>
    </main>
  );
}

export default About;
