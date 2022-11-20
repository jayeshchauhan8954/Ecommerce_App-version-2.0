// I did not used this anywhere
/* 

let Products = require("./../model/products");
let dbConnection = require("./../config/db.config");
const { BIGINT, INTEGER } = require("sequelize");

let getAllProducts = async (req,res,next) => {
    try{
    let products = await Products.findAll();
    //  res.writeHead(200, { 'content-Type': 'application/json' });
    //  res.write(JSON.stringify(products));
     res.status(200).send(products);
    //  res.write("This is product page");
} catch(err){
    next(err);
}
    finally{
        res.end();
    }
};

let getProductById = async (req,res,next) => {
try{
    let id = req.params.productId;
    if(!id) {res.status(400).send("ID not passed")}
    let products = await Products.findAll({
        where: {
            id : id
        }
    })
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    //  res.write(JSON.stringify(products));
     res.status(200).send(products);
} catch(err){
    next(err);
}
    finally{
        res.end();
    }
};

let addNewProduct = async (req,res,next) => {

    try {
           let productToAdd = req.body;
           await Products.create({
                name : productToAdd,
                price : productToAdd,
                categoryId : productToAdd
            });

        res.status(201).send("New product added");
    } catch (err) {
        next(err);
    }
    finally {
       res.end();
    } 
};

let deleteProductById = async (req,res, next) => {
    let id = req.params.id;
    let product = await Products.findByPk(id);
    try{
    if(!product) {
        throw new Error("product not found");
    }
    await Products.destroy({
        where : {
            id : id
        }
    });
    res.status(200).send("Product deleted")
} catch (err){
    next(err)
}
    // finally{
    //     res.end();
    // }
};

let updateProductById = async (req,res,next) => {
    // if(!req.body.name) {
    //     res.status(500).send("Please pass product name");
    //     res.end();
    // }
    try{
    let id = req.params.id;
    let productToUpdate = {
        name : req.body.name,
        price : req.body.price,
        categoryId : req.body.categoryId
    }
    Products.update(productToUpdate , {
        where : {
            id : id
        }
    });
    let updateProduct = await Products.findByPk(id);
    res.status(200).send(updateProduct);
} catch (err){
    next(err);
    }
        finally{
            res.end();
        }
};

let createTable = async () => {
    await dbConnection.sync({force : true});
    console.log("Product table is created");
    // insertProducts();
}

let insertProducts = async () => {
    await Products.bulkCreate(
        [
            {
                name:"Samsung Galaxy Note",
                categoryId:1,
                price : 18000
            },
            {
                name:"Iphone 13",
                categoryId:1,
                price : 60000
            },
            {
                name:"Sony bravia",
                categoryId:2,
                price : 40000
            },
            {
                name:"Boat Rugged",
                categoryId:5,
                price : 4000
            },
            {
                name:"JBL Storm",
                categoryId:5,
                price : 9000
            },
            {
                name:"Vu 5",
                categoryId:2,
                price : 32000
            }
           
        ]
)};

// createTable();

let all = {getAllProducts,getProductById,addNewProduct, deleteProductById, updateProductById};
module.exports = all;

*/ 