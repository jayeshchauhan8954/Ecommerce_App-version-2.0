let Categories = require("./../model/category");
let sequelizeInstance = require("./../config/db.config");
let express = require("express");

let expressApp = express();




let getAllCategories = async (req, res, next) => {
    try {
        let categories = await Categories.findAll();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(categories));
    } catch (err) {
        next(err);
    }
    finally {
        res.end();

    }
};

// UI => route => controller => model => sqlconnection
let getCategoriesById = async (req, res, next) => {
    try {
        let id = req.params.categoryId;
        if (!id) { res.status(400).send("ID not passed") }
        let categories = await Categories.findAll({
            where: {
                categoryId: id,
            },
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(categories));
    } catch (err) {
        next(err);
    }
    finally {
        res.end();
    }
};

let addNewCategory = async (req, res, next) => {

    // if(!req.body.name) {
    //     res.status(400).send({
    //         message : "Name is required"
    //     })
    // }
    try {
        let categoryToAdd = req.body;
        await Categories.create(categoryToAdd);
        res.status(201).send("New category added");
        res.end();
    } catch (err) {
        next(err);
    }
    finally {
        res.end();
    }
};

let deleteCategoryById = async (req, res, next) => {
    let id = req.params.categoryId;
    let category = await Categories.findByPk(id);
    try {
        if (!category) {
            throw new Error("category not found");
        }
        await Categories.destroy({
            where: {
                categoryId: id
            }
        });
        res.status(200).send("Category deleted")
    } catch (err) {
        next(err)
    }
    finally {
        res.end();
    }
};
let updateCategoryById = async (req, res, next) => {
    // if(!req.body.name) {
    //     res.status(500).send("Please pass category name");
    //     res.end();
    // }
    try {
        let id = req.params.categoryId;
        let categoryToUpdate = {
            name: req.body.name,
        }
        Categories.update(categoryToUpdate, {
            where: {
                categoryId: id
            }
        });
        let updateCategory = await Categories.findByPk(id);
        res.status(200).send(updateCategory);
    } catch (err) {
        next(err);
    }
    finally {
        res.end();
    }
};
let all = { getAllCategories, getCategoriesById, addNewCategory, deleteCategoryById, updateCategoryById };
module.exports = all;