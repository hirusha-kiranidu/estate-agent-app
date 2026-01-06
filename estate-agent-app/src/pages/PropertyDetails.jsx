import { useParams } from "react-router-dom";
import { useState } from "react";
import "./PropertyDetails.css";

function PropertyDetails({ properties }) {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  const [currentImage, setCurrentImage] = useState(0);

  if (!property) {
    return <h2 style={{ padding: "40px" }}>Property not found</h2>;
  }

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === property.pictures.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? property.pictures.length - 1 : prev - 1
    );
  };

  return (
    <main className="details-page">
      <h1>{property.type}</h1>
      <p className="price">£{property.price.toLocaleString()}</p>

      {/* IMAGE CAROUSEL */}
      <div className="carousel">
        <button onClick={prevImage}>◀</button>

        <img
          src={`${import.meta.env.BASE_URL}${property.pictures[currentImage]}`}
          alt={`property-${currentImage}`}
        />

        <button onClick={nextImage}>▶</button>
      </div>

      {/* DETAILS */}
      <section className="details">
        <p>
          <strong>Bedrooms:</strong> {property.bedrooms}
        </p>
        <p>
          <strong>Tenure:</strong> {property.tenure}
        </p>
        <p>
          <strong>Location:</strong> {property.location}
        </p>
        <p>
          <strong>Description:</strong>
        </p>
        <p>{property.description}</p>
      </section>

      {/* LOCATION MAP */}
      <section className="location-section">
        <h2>Location</h2>

        <div className="map-card">
          <iframe
            title="Property Location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              property.location
            )}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default PropertyDetails;
