import express from "express";

import path from "path";
const __dirname = import.meta.dirname;

const app = express();
const port = process.env.PORT || "8889";

app.get("/", (request, response) => {
  const products = [
    {
      name: "Minimalist Oak Chair",
      price: "$249",
      img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Nordic Coffee Table",
      price: "$349",
      img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Scandinavian Lamp",
      price: "$129",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Minimalist Bookshelf",
      price: "$399",
      img: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    },
  ];

  response.render("index", { title: "Home", products });
});
app.get("/about", (request, response) => {
  response.render("about", { title: "About" });
});

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
