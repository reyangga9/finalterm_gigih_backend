const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  price: { required: true, type: Number },
  namaProduct: { required: true, type: String },
  videoId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  img: { required: true, type: String },
});

module.exports = mongoose.model("products", productsSchema);
