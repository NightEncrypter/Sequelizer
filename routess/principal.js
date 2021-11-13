const sequelize =require("../db")

const {Router} = require("express");

const Principal=require("../Models/Principal")

const principalRouter = Router();


// ?? POST Request
principalRouter.post("/principals", async(req, res) => {

    const { lastName, firstName ,qualification} = req.body;
    
    //* 2line of codes
//    const teacherData= Teacher.build({ firstName , lastName });
    
    
//     await teacherData.save();
//     console.log("save to database")
    
    //* Simple One line Method for post the data
    const teacherData = await Principal.create({ firstName, lastName ,qualification});
    
    // await teacherData.destroy();


    // console.log(teacherData.toJSON());
    // console.log("main :",teacherData)
    // res.send(req.body);
});


// ?? Get Request
principalRouter.get("/principals", async(req, res) => {

    const {Sid}=req.query
    
    //*FIND ALL USERS || TEACHERS
    // This will give all the attribues from database
   // // const princi = await Teacher.findAll();

    //* Specific Atrributes
   // // const princi = await Teacher.findAll({
    //     attributes:["firstName"]
    // })


    // Renaming the Column key OR attributes
    // const princi = await Teacher.findAll({
    //     attributes:["firstName",["lastName","lName"]]
    // })


    // // *No of count of single row
    // const princi = await Teacher.findAll({
    //     attributes: {
    //         exclude:["firstName","Sid"],
      
            
    //     }
          
            
        
    // });


    // *Single Person FETCHED BY REQ QUERY
    const princi = await Principal.findAll({
    })
    // allTeachers.f_count

    // console.log(princi.to.JSON())
    res.send({princi,total:princi.length})

})



// const onSave= () => {
    
//            const teacherData= Teacher.build({ firstName: "Johnny", lastName: "Sins" });
    
    
//     teacherData.save().then(() => {
//         console.log("save to database")
//     });
   
// }

// onSave();



module.exports = principalRouter;
