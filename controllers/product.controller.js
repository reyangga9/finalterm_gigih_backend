const Product = require("../models/products.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ videoId: req.params.id });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts };
