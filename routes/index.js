const express = require("express");
const categoryRoutes = require("./categories.route");
const productRoutes = require("./product.route");
let router = express.Router();
router.get("/", (req,res,next) => {
    res.write("This is the base page");
    res.end();
});

// This is base route for categories "/categories"
router.use('/categories', categoryRoutes);
// This is base route for products "/products"
router.use('/products', productRoutes);

module.exports = router;