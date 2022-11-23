let dbConnection = require("./../config/db.config");
let sequelize = require("sequelize")

let Categories = dbConnection.define("categories", {
    Id: {
        primaryKey: true,
        notNull: true,
        type: sequelize.DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        notNull: true,
        type: sequelize.DataTypes.STRING
    }
},
    {
        timestamps: false
    });

module.exports = Categories;