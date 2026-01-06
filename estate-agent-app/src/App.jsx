import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import PropertyPage from "./pages/PropertyPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PropertyDetails from "./pages/PropertyDetails";
import Footer from "./components/Footer";

import propertiesData from "./data/properties.json";

function App() {
  const properties = propertiesData.properties;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home />} />

        {/* PROPERTY PAGE */}
        <Route
          path="/property"
          element={<PropertyPage properties={properties} />}
        />

        {/* PROPERTY DETAILS PAGE */}
        <Route
          path="/property/:id"
          element={<PropertyDetails properties={properties} />}
        />

        {/* ABOUT PAGE AND THE CONTACCT PAGE */}
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
