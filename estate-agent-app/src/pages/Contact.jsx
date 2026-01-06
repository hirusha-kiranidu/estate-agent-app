import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        Have a question or need more information? Get in touch with us.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Phone Number" />

        <textarea placeholder="Your Message" rows="5"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </main>
  );
}

export default Contact;
