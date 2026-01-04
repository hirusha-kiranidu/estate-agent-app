import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import Favourite from "./pages/Favourite"
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/favourite" element={<Favourite />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
