// const sequelize = require("../db");

const { Sequelize, DataTypes } = require("sequelize");



const sequelize = new Sequelize();

// Create new modals
const Principal = sequelize.define("Principal", {
    // Models Attributes

 
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    qualification: {
        type: DataTypes.STRING
        
    },
    Pid: {
        type: DataTypes.UUID,
        // allowNull: false,
        primaryKey: true,
        defaultValue:Sequelize.UUIDV4
        // autoIncrement:true
        
    },


})



Principal.sync().then((data) => {
    console.log("Principal Table Created Successfully",data)
}).catch(err => {
    console.log(err);
})

module.exports=Principal
