import { Link } from "react-router-dom";

export default function RayanCard({ item }) {
  return (
    <Link to={`/item/${item.id}`} className="rayan-card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
    </Link>
  );
}