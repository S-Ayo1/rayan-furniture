import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { SITE } from "../config/site";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt={SITE.name} />
      </Link>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}