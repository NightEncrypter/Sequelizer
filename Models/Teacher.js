// const sequelize = require("../db");

const { Sequelize, DataTypes } = require("sequelize");



const sequelize = new Sequelize();

// Create new modals
const Teacher = sequelize.define("Teacher", {
    // Models Attributes

 
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Sid: {
        type: DataTypes.UUID,
        // allowNull: false,
        primaryKey: true,
        defaultValue:Sequelize.UUIDV4
        // autoIncrement:true
        
    },


})



Teacher.sync().then((data) => {
    console.log("Table Created Successfully",data)
}).catch(err => {
    console.log(err);
})

module.exports=Teacher
