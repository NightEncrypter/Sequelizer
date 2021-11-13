const { Router } = require("express")
const Product = require("../Models/Product");
const Feature = require("../Models/Feature");

const product = Router();


product.get("/", (req, res) => {
    res.send("hello");
});


product.post("/",async (req, res) => {

    const { feature,product } = req.body;


    const productx=await Product.create(product);

    await createProductx(feature);


    
    // console.log(product.toJSON())

















    res.send("Your Product data has saved");
})


module.exports = product;