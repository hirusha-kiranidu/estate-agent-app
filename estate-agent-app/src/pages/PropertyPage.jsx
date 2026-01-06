import { useState } from "react";
import "./PropertyPage.css";

function PropertyPage({ properties }) {
  //  SEARCH STATE
  const [type, setType] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [dateAdded, setDateAdded] = useState("");

  const [filtered, setFiltered] = useState(properties);

  //  FAVOURITES
  const [favourites, setFavourites] = useState([]);

  // SEARCH LOGIC
  const handleSearch = () => {
    const results = properties.filter((p) => {
      if (type !== "Any" && p.type !== type) return false;
      if (minPrice && p.price < Number(minPrice)) return false;
      if (maxPrice && p.price > Number(maxPrice)) return false;
      if (minBeds && p.bedrooms < Number(minBeds)) return false;
      if (maxBeds && p.bedrooms > Number(maxBeds)) return false;

      if (dateAdded) {
        const propDate = new Date(
          `${p.added.month} ${p.added.day}, ${p.added.year}`
        );
        if (propDate < new Date(dateAdded)) return false;
      }

      return true;
    });

    setFiltered(results);
  };

  const handleReset = () => {
    setFiltered(properties);
    setType("Any");
    setMinPrice("");
    setMaxPrice("");
    setMinBeds("");
    setMaxBeds("");
    setDateAdded("");
  };

  //  FAVOURITES LOGIC
  const toggleFavourite = (property) => {
    const exists = favourites.find((f) => f.id === property.id);

    if (exists) {
      // remove from favourites
      setFavourites(favourites.filter((f) => f.id !== property.id));
    } else {
      // add to favourites
      setFavourites([...favourites, property]);
    }
  };
  // DRAG AND DRROP
  const addFavourite = (property) => {
    if (!favourites.find((f) => f.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  return (
    <main className="property-page">
      <h1 className="page-title">Property Listings</h1>

      {/*  SEARCH FORM  */}
      <section className="search-section">
        <div className="search-grid">
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Any">Any Type</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>

          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Min Bedrooms"
            value={minBeds}
            onChange={(e) => setMinBeds(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Bedrooms"
            value={maxBeds}
            onChange={(e) => setMaxBeds(e.target.value)}
          />

          <input
            type="date"
            value={dateAdded}
            onChange={(e) => setDateAdded(e.target.value)}
          />
        </div>

        <div className="search-actions">
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleReset}>Undo</button>
        </div>
      </section>

      {/*  CONTENT */}
      <section className="content-section">
        {/* PROPERTY CARDS */}
        <div className="cards-grid">
          {filtered.length === 0 ? (
            <p className="no-results">
              No matching results found. Please adjust your search criteria.
            </p>
          ) : (
            filtered.map((p) => (
              <div
                key={p.id}
                className="property-card"
                draggable
                onDragStart={(e) =>
                  e.dataTransfer.setData("property", JSON.stringify(p))
                }
                onClick={() => window.open(`/property/${p.id}`, "_blank")}
              >
                <img
                  src={`${window.location.origin}/${p.pictures[0]}`}
                  alt={p.id}
                />

                {/* BOOKMARK */}
                <i
                  className={`fa-bookmark bookmark ${
                    favourites.find((f) => f.id === p.id)
                      ? "fa-solid active"
                      : "fa-regular"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavourite(p);
                  }}
                ></i>

                <h4>£{p.price.toLocaleString()}</h4>
                <p>{p.description.substring(0, 100)}...</p>
              </div>
            ))
          )}
        </div>

        {/* FAVOURITES */}
        <div
          className="favourites-box"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) =>
            addFavourite(JSON.parse(e.dataTransfer.getData("property")))
          }
        >
          <h3>Favourites</h3>
          {favourites.length === 0 && <p>No favourites yet</p>}
          {favourites.map((f) => (
            <p key={f.id}>{f.location}</p>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PropertyPage;
