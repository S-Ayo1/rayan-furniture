import { useParams, Link } from "react-router-dom";
import { allItems } from "../api/rayan";
import { SITE } from "../config/site";

export default function RayanDetails() {
  const { id } = useParams();
  const item = allItems.find((i) => i.id === Number(id));

  if (!item) {
    return (
      <div className="details">
        <p>Item not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  const specs = [
        { label: "Material", value: item.material },
        { label: "Size", value: item.size },
        { label: "Color", value: item.color },
    ].filter((spec) => spec.value);

  const message = `Hello, I'm interested in ${item.title} (ref ${item.id}).`;
  const whatsappLink = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(message)}`;      

  return (
    <div className="details">
        <div
          className="details-backdrop"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="details-content">
            <Link to="/">← Back</Link>
            <div className="details-main">
                <img src={item.image} alt={item.title} />
                <div className="details-info">
                    <h1>{item.title}</h1>

                    {item.price && (
                        <p className="details-price">₦{item.price.toLocaleString()}</p>
                    )}

                    <p className="details-description">{item.description}</p>

                    {specs.length > 0 && (
                        <ul className="details-specs">
                        {specs.map((spec) => (
                            <li key={spec.label}>
                            <span>{spec.label}</span>
                            <strong>{spec.value}</strong>
                            </li>
                        ))}
                        </ul>
                    )}

                    <div className="details-actions">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                        >
                            Contact to order
                        </a>
                        <a href={`tel:+${SITE.phone}`} className="btn btn-outline">
                            Call
                        </a>
                    </div>
                </div>
            </div>     
        </div>
    </div>
  );
}




    // <div className="details">
    //   <Link to="/">← Back</Link>
    //   <img src={item.image} alt={item.title} />
    //   <h1>{item.title}</h1>
    //   <p>{item.description}</p>
    // </div>