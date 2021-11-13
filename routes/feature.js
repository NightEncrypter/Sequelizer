const { Router } = require("express")
const Feature=require("../Models/Feature")
const feature = Router();


feature.get("/", (req, res) => {
    res.send("hello from feature")
});


feature.post("/",async (req, res) => {


    const feature = await Feature.create(req.body);


    


    res.send("feature saved");
})


module.exports=feature