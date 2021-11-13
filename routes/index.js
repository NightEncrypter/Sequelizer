const {Router}=require("express")
const apple =require("./apple")
const product =require("./product")
const feature =require("./feature")
const main = Router();

main.use("/apple", apple);
main.use("/product", product);
main.use("/feature", feature);

module.exports=main