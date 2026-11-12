import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RayanDetails from "./pages/RayanDetails";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<RayanDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}