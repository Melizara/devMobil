import { Product } from "../models/productModel.js";

// GET /api/products
export const getProducts = (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET /api/products/:numproduit
export const getProduct = (req, res) => {
  Product.getById(req.params.numproduit, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(404).json({ message: "Produit introuvable" });
    res.json(results[0]);
  });
};

// POST /api/products
export const addProduct = (req, res) => {
  Product.create(req.body, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Produit ajouté !" });
  });
};

// PUT /api/products/:numproduit
export const updateProduct = (req, res) => {
  Product.update(req.params.numproduit, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Produit modifié !" });
  });
};

// DELETE /api/products/:numproduit
export const deleteProduct = (req, res) => {
  Product.delete(req.params.numproduit, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Produit supprimé !" });
  });
};
