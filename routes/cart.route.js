let express = require("express");
let cartRouter = express.Router();
let cartController = require("./../controller/cart.controller");
// let authJwt = require("./../middlewares/authJwt");

// cartRouter.get("/:cartId", [authJwt.VerifyToken], cartController.getCart);
// cartRouter.put("/:cartId", [authJwt.VerifyToken], cartController.updateCart);
// cartRouter.post("/", [authJwt.VerifyToken], cartController.createCart);

cartRouter.put("/:cartId", cartController.updateCart);
cartRouter.get("/:cartId", cartController.getCart);
cartRouter.post("/", cartController.createCart);
module.exports = cartRouter;