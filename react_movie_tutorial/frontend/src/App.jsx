import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import Home from "./pages/home";
import Favourites from "./pages/favourites";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
  <NavBar />
  <main className="main-content container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  </main>
  <footer>
    © {new Date().getFullYear()} Book Stop. All rights reserved.
  </footer>
</div>
  );
}

export default App;
