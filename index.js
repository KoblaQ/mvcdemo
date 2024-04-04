const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
require("dotenv").config();

const app = express();

// Import the routes module to the index.js
app.use("", require("./routes/products"));

app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");

// const dbURI =
//   "mongodb+srv://" +
//   process.env.DBUSER +
//   ":" +
//   process.env.DBPASSWD +
//   "" +
//   process.env.CLUSTER +
//   ".mongodb.net/" +
//   process.env.DB +
//   "?retryWrites=true&w=majority&appName=Cluster0";

const dbURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWD}@${process.env.CLUSTER}.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURI);

const Product = require("./models/Product");

// Copied and pasted in the products.js file (app has been changed to router)
// app.get("/", async (req, res) => {
//   res.send("My MVC App");
// });

// app.get("/products/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const product = await Product.findById(id);
//     res.render("index", {
//       product: product.toJSON(),
//     });
//   } catch (err) {
//     res.status(404).json({
//       msg: "not found",
//     });
//   }
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening to port ${PORT}`));
