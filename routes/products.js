const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const exphbs = require("express-handlebars");

// require("dotenv").config();

// Get database connection
// const dbURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWD}@${process.env.CLUSTER}.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=Cluster0`;

const productController = require("../controllers/productController");

// mongoose.connect(dbURI);

// const Product = require("../models/Product");

router.get("/", productController.getHome);
// router.get("/", async (req, res) => {
//   //   res.send("My MVC App");
// });

router.get("/products/:id", productController.getProductDetails);
// router.get("/products/:id", async (req, res) => {
//   //   try {
//   //     const id = req.params.id;
//   //     const product = await Product.findById(id);
//   //     res.render("index", {
//   //       product: product.toJSON(),
//   //     });
//   //   } catch (err) {
//   //     res.status(404).json({
//   //       msg: "not found",
//   //     });
//   //   }
// });

module.exports = router;
