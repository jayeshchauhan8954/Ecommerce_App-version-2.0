const serverConfig = require("./config/server.config");
let bodyParser = require("body-parser");
const express = require('express');
const router = require("./routes/index");
const ErroHandler = require("./middlewares/ErrorHandler");
const dbConnection = require("./config/db.config");
const Category = require("./model/category");
const Product = require("./model/products");

const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.use(ErroHandler);

Category.hasMany(Product)
let init = async () => {
    await dbConnection.sync({ force: true });
    insertCategories();
}

let insertCategories = async () => {
    await Category.bulkCreate([
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

expressApp.listen(serverConfig.PORT, () => {
    console.log("server listening at port " + serverConfig.PORT)
    init();
});

/*
step to create an application
1. create seperate folder
2. npm init
3. npm i express
4. npm i mysql
5. npm i mysql2
6. npm i sequelize
7. npm i dotenv
8. create a .env file and write in it port
9. create a config folder and make server.config.js file and write
10.create a server.js file and write in it
11. create a route folder and create index.js file in it and write routes
12. create a new folder controller and make category.controller and product.controller
13. create a database name ecomm_db from mysql
14. now create db.config.js in config folder and write in it
15. now create a model folder and create category.js in it and write code
16. .... npm i body-parser
*/