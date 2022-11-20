let express = require("express");
let productRouter = express.Router();
let productController = require("./../controller/product.controller");
productRouter.get("/", productController.getAllProducts);

productRouter.get("/:productId", productController.getProductById);

productRouter.post("/", productController.addNewProduct);

productRouter.delete("/:productId", productController.deleteProductById);

productRouter.put("/:productId", productController.updateProductById);

// add one for post

// add one for delete

// add one for put

// all three with try and catch
module.exports = productRouter;