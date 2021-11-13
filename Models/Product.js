const {Sequelize,DataTypes}=require("sequelize")
const sequelize=require("../db")

const Feature =require("./Feature")

// const sequelize = new Sequelize()

const Product = sequelize.define("product", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id: {
        type: DataTypes.UUID,
        // we have explicitly passed the default value of id in schema 
        defaultValue:Sequelize.UUIDV4,

        primaryKey: true,
        
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Product.hasOne(Feature);
Feature.belongsTo(Product);

// Feature.belongsTo(Product, {
// foreignKey:"piopid"
// });


sequelize.sync({force:true}).then(() => {
    console.log("Product table is created")
}).catch(err=>console.log(err))

module.exports=Product
