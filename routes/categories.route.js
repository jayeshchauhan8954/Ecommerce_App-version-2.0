let express = require("express");
let categoryRouter = express.Router();
let categoryController = require("./../controller/category.controller");
let requestValidor = require("./../middlewares/request.validator");

categoryRouter.get("/", categoryController.getAllCategories );

categoryRouter.get("/:categoryId", [requestValidor.validateReqForCategoryId],categoryController.getCategoriesById);

categoryRouter.post("/", [requestValidor.validateReqForCategoryName],categoryController.addNewCategory);

categoryRouter.delete("/:categoryId",[requestValidor.validateReqForCategoryId], categoryController.deleteCategoryById);

categoryRouter.put("/:categoryId",[requestValidor.validateReqForCategoryName],[requestValidor.validateReqForCategoryId], categoryController.updateCategoryById);

module.exports = categoryRouter;