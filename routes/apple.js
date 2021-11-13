const {Router}=require("express")

const apple=Router();

apple.get("/", (req, res) => {
    res.send("HEy from apple")
})


module.exports = apple;