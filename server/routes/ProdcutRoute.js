const express = require("express");
const router = express.Router();
const { addProduct, getProduct } = require("../controller/ProductController");
const upload = require('../multerConfig');
router.post("/addproducts",upload, addProduct);
router.get("/getproducts", getProduct);

module.exports = router;
