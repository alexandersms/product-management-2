const router = require("express").Router();
const Product = require("../models/Product.model");
const ProductController = require("../controllers/Product.controller");

// Récupération de tous les produits
router.get("/", ProductController.getAllProducts);

//Créer un produit
router.post("/", ProductController.createNewProduct);

// Routes parameters
router.get("/:id", ProductController.findProductById);

router.patch("/:id", ProductController.updateAProduct);

router.delete("/:id", ProductController.deleteAProduct);

module.exports = router;
