var express = require("express");
const { getProducts } = require("../controllers/product.controller");

const app = express();
var router = express.Router();

/* GET home page. */
router.get("/:id", getProducts);

module.exports = router;
