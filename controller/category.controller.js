let Categories = require("./../model/category");
let sequelizeInstance = require("./../config/db.config");
let express = require("express");
let expressApp = express();

let createTable = async () => {
    await sequelizeInstance.sync({force : true});
    insertCategories();
    console.log("Table created successfully");
}

let insertCategories = async () => {
    await Categories.bulkCreate([
        {
            name: "Fashion"
        },
        {
            name: "Mobile"
        },
        {
            name: "Electronics"
        },
        {
            name: "Appliances"
        }
    ])
}

let getAllCategories = async (req, res, next) => {
    let categories = await Categories.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(categories));
    res.end();
};

// UI => route => controller => model => sqlconnection
let getCategoriesById = async (req, res, next) => {
 let id = req.params.categoryId;
    if(!id) {res.status(400).send("ID not passed")}
    let categories = await Categories.findAll({
        where: {
           categoryId : id,
        },
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
     res.write(JSON.stringify(categories));
    res.end();

};
// createTable();
module.exports = { getAllCategories, getCategoriesById };