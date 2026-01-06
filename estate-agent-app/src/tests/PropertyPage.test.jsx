import { render, screen } from "@testing-library/react";
import PropertyPage from "../pages/PropertyPage";
import properties from "../data/properties.json";

// TEST 01
test("PropertyPage renders without crashing", () => {
  render(<PropertyPage properties={properties.properties} />);

  const heading = screen.getByText(/Property/i);
  expect(heading).toBeInTheDocument();
});

// TEST 02
test("Property cards are rendered from JSON data", () => {
  render(<PropertyPage properties={properties.properties} />);

  // Expect at least one price to appear
  const priceElements = screen.getAllByText(/£/);
  expect(priceElements.length).toBeGreaterThan(0);
});

// TEST 03
import userEvent from "@testing-library/user-event";

test("Search filters properties by type", async () => {
  const user = userEvent.setup();

  render(<PropertyPage properties={properties.properties} />);

  // Select "House" from dropdown
  const typeSelect = screen.getByRole("combobox");
  await user.selectOptions(typeSelect, "House");

  // Click search button
  const searchButton = screen.getByText("Search");
  await user.click(searchButton);

  // Check that only house properties are shown
  const results = screen.getAllByText(/House/i);
  expect(results.length).toBeGreaterThan(0);
});

// TEST 04
test("Displays no matching results message when search returns empty", async () => {
  const user = userEvent.setup();

  render(<PropertyPage properties={properties.properties} />);

  // Set a very high minimum price to ensure no matches
  const minPriceInput = screen.getByPlaceholderText("Min Price");
  await user.type(minPriceInput, "10000000");

  // Click search
  const searchButton = screen.getByText("Search");
  await user.click(searchButton);

  // Expect no results message
  const message = screen.getByText(/no matching results/i);
  expect(message).toBeInTheDocument();
});

// TEST 05
test("Bookmark toggles favourite state on click", async () => {
  const user = userEvent.setup();

  render(<PropertyPage properties={properties.properties} />);

  // Get first bookmark icon
  const bookmark = document.querySelector(".bookmark");

  // Click to add favourite
  await user.click(bookmark);
  expect(bookmark.classList.contains("active")).toBe(true);

  // Click again to remove favourite
  await user.click(bookmark);
  expect(bookmark.classList.contains("active")).toBe(false);
});



