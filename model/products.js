let dbConnection = require("./../config/db.config");
let sequelize = require("sequelize");

let Products = dbConnection.define("products", {
    id : {
        primaryKey : true,
        notNull : true,
        autoIncrement : true,
        type: sequelize.DataTypes.INTEGER
    },
    name : {
        notNull : true,
        type : sequelize.DataTypes.STRING
    },
    price : {
        notNull : true,
        type : sequelize.DataTypes.STRING
    },
    categoryId : {
        notNull : true,
        type : sequelize.DataTypes.INTEGER
    }
},
{
    timestamps : false
});

module.exports = Products;