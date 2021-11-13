const sequelize =require("../db")

const {Router} = require("express");

const Teacher = require("../Models/Teacher")
// const Principal =require("../Models/Principal")

const teacherRouter = Router();


// ?? POST Request
teacherRouter.post("/teacher", async(req, res) => {

    const { lastName, firstName } = req.body;
    
    //* 2line of codes
//    const teacherData= Teacher.build({ firstName , lastName });
    
    
//     await teacherData.save();
//     console.log("save to database")
    
    //* Simple One line Method for post the data
    const teacherData = await Teacher.create({ firstName, lastName });
    
    // await teacherData.destroy();


    console.log(teacherData.toJSON());
    // console.log("main :",teacherData)
    // res.send(req.body);
});


// ?? Get Request
teacherRouter.get("/teachers", async(req, res) => {

    const {Sid}=req.query
    
    //*FIND ALL USERS || TEACHERS
    // This will give all the attribues from database
   // // const allTeachers = await Teacher.findAll();

    //* Specific Atrributes
   // // const allTeachers = await Teacher.findAll({
    //     attributes:["firstName"]
    // })


    // Renaming the Column key OR attributes
    // const allTeachers = await Teacher.findAll({
    //     attributes:["firstName",["lastName","lName"]]
    // })


    // // *No of count of single row
    // const allTeachers = await Teacher.findAll({
    //     attributes: {
    //         exclude:["firstName","Sid"],
      
            
    //     }
          
            
        
    // });


    // *Single Person FETCHED BY REQ QUERY
    const allTeachers = await Teacher.findAll({
        where: {
            Sid
        }
    })
    // allTeachers.f_count

    console.log(allTeachers.f_count)
    res.send({allTeachers,total:allTeachers.length})

})



// const onSave= () => {
    
//            const teacherData= Teacher.build({ firstName: "Johnny", lastName: "Sins" });
    
    
//     teacherData.save().then(() => {
//         console.log("save to database")
//     });
   
// }

// onSave();



module.exports = teacherRouter;
