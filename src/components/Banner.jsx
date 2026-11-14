import { useEffect, useState } from "react";

const files = import.meta.glob("../assets/banner/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const slides = Object.keys(files)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((path) => files[path]);

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`banner-slide ${i === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  );
}