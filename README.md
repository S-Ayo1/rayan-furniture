# Rayan Furniture

A responsive furniture catalog website built with React and Vite. Visitors can browse furniture by category, open any piece to see its photos, price and specifications, and contact the brand directly on WhatsApp to order.


## Features

- Home page with an auto-switching banner slideshow
- Furniture displayed in scrollable rows by category
- Clickable cards that open a details page for each piece
- Details page with a photo gallery, price, material, size and colour
- "Contact to order" button that opens WhatsApp with the item's name filled in
- About page with behind-the-scenes and advertisement videos (YouTube embeds)
- Navbar with animated hover underline and active-page highlight
- Footer with contact details and social links
- Fully responsive layout for phones, tablets and desktops

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- CSS (grid, flexbox, transitions)

## Getting started

Make sure you have [Node.js](https://nodejs.org/) installed, then:

```bash
git clone https://github.com/S-Ayo1/rayan-furniture.git
cd rayan-furniture
npm install
npm run dev
```

Open the address shown in the terminal (usually `http://localhost:5173`).

## Project structure

```
src/
  api/          furniture items (rayan.js) and videos (videos.js)
  assets/
    banner/     banner slideshow images (1, 2, 3...)
    items/      one folder per furniture item, named by its id
  components/   Navbar, Footer, Banner, RayanRow, RayanCard, VideoSection
  config/       site.js, contact details used across the site
  pages/        Home, RayanDetails, About
```

## Adding content

**New furniture item**

1. Create a folder in `src/assets/items/` named with the item's id (for example `1140`) and put its photos inside, named `1`, `2`, `3`. The first photo is the card image.
2. Add an entry to a list in `src/api/rayan.js`, using `...pics(1140)` for the images.

**New video**

Upload it to YouTube, then add its id and shape (`"tall"` or `"wide"`) to `src/api/videos.js`.

**Contact details**

Edit `src/config/site.js`.

## Author

Sherif Ayo, [GitHub](https://github.com/S-Ayo1)