const express =require("express");


// const teacher=require("./routes/teacher")
const main=require("./routes")
// const principal=require("./routes/principal")
const app = express();
// require("./db");

app.use(express.json({extended:false}))

// app.use("/", teacher);
// app.use("/", principal);
app.use("/", main);
app.get("/", (req, res) => {
    res.send("Hey from get request");
});



const PORT = 8000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Port on ${PORT}`)
})