const files = import.meta.glob("../assets/items/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const pics = (id) => {
  const images = Object.keys(files)
    .filter((path) => path.includes(`/items/${id}/`))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((path) => files[path]);

  return { image: images[0], images };
};




export const trending = [
  {
    id: 1124,
    ...pics(1124),
    title: "Modern Bed Frame",
    description: "A perfect blend of style and comfort, designed to bring a touch of elegance to your bedroom.",
    price: 150000,
    material: "Solid oak",
    size: "120cm x 60cm",
    color: "Walnut brown"
  },
  { id: 1123, ...pics(1123), title: "Luxury Bed Frame", description: "Elevate your bedroom with this beautifully crafted bed frame, combining sophistication and timeless appeal.", price: 200000, material: "Walnut wood" },
  { id: 1122, ...pics(1122), title: "Classic Bed Frame", description: "Simple, stylish, and durable. The perfect addition to create a warm and inviting bedroom.", price: 120000, material: "Pine wood" },
  { id: 1121, ...pics(1121), title: "Modern upholstered bed frame", description: "Sleek and cushioned, with a tufted headboard that adds a touch of luxury to any bedroom", price: 180000, material: "Velvet fabric" },
  { id: 1120, ...pics(1120), title: "Minimalist platform Bed Frame", description: "Clean lines and a low profile for a calm, uncluttered look, with a strong build that lasts", price: 140000, material: "Steel" },
];

export const topRated = [
  { id: 1125, ...pics(1125), title: "Rayan 1", description: "Add a description here.", price: 150000, material: "Solid oak" },
  { id: 1126, ...pics(1126), title: "Rayan 2", description: "Add a description here.", price: 200000, material: "Walnut wood" },
  { id: 1127, ...pics(1127), title: "Rayan 3", description: "Add a description here.", price: 120000, material: "Pine wood" },
];

export const maintainance = [
  { id: 1133, ...pics(1133), title: "Rayan 1", description: "Add a description here." },
  { id: 1132, ...pics(1132), title: "Rayan 2", description: "Add a description here." },
  { id: 1131, ...pics(1131), title: "Rayan 3", description: "Add a description here." },
  { id: 1130, ...pics(1130), title: "Rayan 4", description: "Add a description here." },
  { id: 1129, ...pics(1129), title: "Rayan 5", description: "Add a description here." },
  { id: 1128, ...pics(1128), title: "Rayan 6", description: "Add a description here." },
  { id: 11277, ...pics(11277), title: "Rayan 7", description: "Add a description here." },
];

export const allItems = [...trending, ...topRated, ...maintainance];