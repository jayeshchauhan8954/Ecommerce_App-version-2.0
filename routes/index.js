const express = require("express");
const categoryRoutes = require("./categories.route");
const productRoutes = require("./product.route");
const authRoute = require("./auth.route");
const cartRoute = require("./cart.route");
let router = express.Router();
router.get("/", (req, res, next) => {
    res.write("This is the base page");
    res.end();
});

// This is base route for categories "/categories"
router.use('/ecomm/api/v1/categories', categoryRoutes);
// This is base route for products "/products"
router.use('/ecomm/api/v1/products', productRoutes);
router.use('/ecomm/api/v1/auth', authRoute);
router.use('/ecomm/api/v1/cart', cartRoute);

module.exports = router;
