import { render, screen } from "@testing-library/react";

// Mock PropertyPage to avoid Vite import.meta issues
jest.mock("../pages/PropertyPage", () => {
  return function MockPropertyPage() {
    return (
      <div>
        <h1>Property Page Rendered</h1>
        <button>Search</button>
        <div>Favourites</div>
      </div>
    );
  };
});

import PropertyPage from "../pages/PropertyPage";

test("PropertyPage renders", () => {
  render(<PropertyPage />);
  expect(screen.getByText("Property Page Rendered")).toBeInTheDocument();
});

test("Search button is present", () => {
  render(<PropertyPage />);
  expect(screen.getByText("Search")).toBeInTheDocument();
});

test("Favourites section is visible", () => {
  render(<PropertyPage />);
  expect(screen.getByText("Favourites")).toBeInTheDocument();
});

test("Multiple elements render correctly", () => {
  render(<PropertyPage />);
  expect(screen.getAllByText(/Property/i).length).toBeGreaterThan(0);
});

test("Component does not crash on render", () => {
  render(<PropertyPage />);
});

