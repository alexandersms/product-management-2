const createError = require("http-errors");
const mongoose = require("mongoose");
const Product = require("../models/Product.model");

module.exports = {
  getAllProducts: async (req, res, next) => {
    try {
      const result = await Product.find({}, { __v: 0 });
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json(err.message);
    }
  },

  createNewProduct: async (req, res, next) => {
    try {
      const product = new Product(req.body);
      const result = await product.save();
      res.status(200).json(result);
    } catch (err) {
      console.log(err.message);
      if (err.name === "ValidationError") {
        next(createError(422, err.message));
        return;
      }
      next(err);
    }
  },

  findProductById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      if (!product) {
        throw createError(404, "Le produit n'existe pas");
      }
      res.status(200).json(product);
    } catch (err) {
      console.log(err.message);
      if (err instanceof mongoose.CastError) {
        next(createError(400, "ID du produit invalide"));
        return;
      }
      next(err);
    }
  },

  updateAProduct: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };
      const result = await Product.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, "Le produit n'existe pas");
      }
      res.status(200).json(result);
    } catch (err) {
      console.log(err.message);
      if (err instanceof mongoose.CastError) {
        return next(createError(400, "ID du produit invalide"));
      }
      next(err);
    }
  },

  deleteAProduct: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Product.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Le produit n'existe pas");
      }
      res.status(200).json(result);
    } catch (err) {
      console.log(err.message);
      if (err instanceof mongoose.CastError) {
        next(createError(400, "ID du produit invalide"));
        return;
      }
      next(err);
    }
  }
};
