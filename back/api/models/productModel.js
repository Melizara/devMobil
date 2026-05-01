import { db } from "../configs/database.js";

export const Product = {
  getAll: (callback) => {
    db.query("SELECT * FROM products", callback);
  },

  getById: (numproduit, callback) => {
  db.query(
    "SELECT * FROM products WHERE numproduit = ?",
    [numproduit],
    callback
  );
},


  create: (data, callback) => {
    const { numproduit, designation, prix, quantite } = data;
    db.query(
      "INSERT INTO products (numproduit, designation, prix, quantite) VALUES (?, ?, ?, ?)",
      [numproduit, designation, prix, quantite],
      callback,
    );
  },

   update: (numproduit, data, callback) => {
    const { designation, prix, quantite } = data;
    db.query(
      "UPDATE products SET designation = ?, prix = ?, quantite = ? WHERE numproduit = ?",
      [designation, prix, quantite, numproduit],
      callback
    );
  },

  delete: (numproduit, callback) => {
    db.query("DELETE FROM products WHERE numproduit = ?", [numproduit], callback);
  }
};
