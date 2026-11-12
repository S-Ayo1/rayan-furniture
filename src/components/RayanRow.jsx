import RayanCard from "./RayanCard";

export default function RayanRow({ title, items }) {
  return (
    <section className="rayan-row">
      <h2>{title}</h2>
      <div className="row-posters">
        {items.map((item) => (
          <RayanCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}