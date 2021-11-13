const {Sequelize,DataTypes}=require("sequelize")
const sequelize=require("../db")
// const Product=require("./Product")


const Feature=sequelize.define("Feature", {
    face_unlock: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
    },
    ram: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    id: {
        type: DataTypes.UUID,
        // we have explicitly passed the default value of id in schema 
        defaultValue:Sequelize.UUIDV4,

        primaryKey: true,
        
    },
    storage: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    processor: {
        type: DataTypes.STRING,
        allowNull:false,
    },

})

// Feature.hasOne(Product);
// Product.belongsTo(Feature);

sequelize.sync({force:true}).then(() => {
    console.log("Feature table is created")
})

module.exports=Feature
