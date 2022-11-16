let express = require("express");
let categoryRouter = express.Router();
let categoryController = require("./../controller/category.controller");

categoryRouter.get("/", categoryController.getAllCategories );

categoryRouter.get("/:categoryId", categoryController.getCategoriesById);

module.exports = categoryRouter;