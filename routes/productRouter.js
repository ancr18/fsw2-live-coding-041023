const router = require("express").Router();

const Product = require("../controllers/productController.js");

router.post("/", Product.createProduct);
router.get("/", Product.findProducts);
router.get("/:id", Product.findProductsById);
router.get("/:id", Product.updateProduct);
router.get("/:id", Product.deleteProduct);

module.exports = router;
