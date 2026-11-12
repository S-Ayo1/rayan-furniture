import img1124 from "../assets/IMG_1124.jpg";
import img1123 from "../assets/IMG_1123.jpg";
import img1122 from "../assets/IMG_1122.jpg";
import img1121 from "../assets/IMG_1121.jpg";
import img1120 from "../assets/IMG_1120.jpg";
import img1125 from "../assets/IMG_1125.jpg";
import img1126 from "../assets/IMG_1126.jpg";
import img1127 from "../assets/IMG_1127.jpg";
import img11277 from "../assets/IMG_11277.jpg";
import img1128 from "../assets/IMG_1128.jpg";
import img1129 from "../assets/IMG_1129.jpg";
import img1130 from "../assets/IMG_1130.jpg";
import img1131 from "../assets/IMG_1131.jpg";
import img1132 from "../assets/IMG_1132.jpg";
import img1133 from "../assets/IMG_1133.jpg";


export const trending = [
  { 
    id: 1124, 
    image: img1124, 
    title: "Modern Bed Frame", 
    description: "A perfect blend of style and comfort, designed to bring a touch of elegance to your bedroom.", 
    price: 150000,
    material: "Solid oak",
    size: "120cm x 60cm",
    color: "Walnut brown"
  },
  { id: 1123, image: img1123, title: "Luxury Bed Frame", description: "Elevate your bedroom with this beautifully crafted bed frame, combining sophistication and timeless appeal.", price: 200000, material: "Walnut wood" },
  { id: 1122, image: img1122, title: "Classic Bed Frame", description: "Simple, stylish, and durable. The perfect addition to create a warm and inviting bedroom.", price: 120000, material: "Pine wood" },
  { id: 1121, image: img1121, title: "Modern upholstered bed frame", description: "Sleek and cushioned, with a tufted headboard that adds a touch of luxury to any bedroom", price: 180000, material: "Velvet fabric" },
  { id: 1120, image: img1120, title: "Minimalist platform Bed Frame", description: "Clean lines and a low profile for a calm, uncluttered look, with a strong build that lasts", price: 140000, material: "Steel" },
];

export const topRated = [
  { id: 1125, image: img1125, title: "Rayan 1", description: "Add a description here.", price: 150000, material: "Solid oak" },
  { id: 1126, image: img1126, title: "Rayan 2", description: "Add a description here.", price: 200000, material: "Walnut wood" },
  { id: 1127, image: img1127, title: "Rayan 3", description: "Add a description here.", price: 120000, material: "Pine wood" },
];

export const maintainance = [
  { id: 1133, image: img1133, title: "Rayan 1", description: "Add a description here." },
  { id: 1132, image: img1132, title: "Rayan 2", description: "Add a description here." },
  { id: 1131, image: img1131, title: "Rayan 3", description: "Add a description here." },
  { id: 1130, image: img1130, title: "Rayan 4", description: "Add a description here." },
  { id: 1129, image: img1129, title: "Rayan 5", description: "Add a description here." },
  { id: 1128, image: img1128, title: "Rayan 6", description: "Add a description here." },
  { id: 11277, image: img11277, title: "Rayan 7", description: "Add a description here." },
];

export const allItems = [...trending, ...topRated, ...maintainance];