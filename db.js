const {Sequelize}=require("sequelize")

 const sequelize = new Sequelize("sakila", "root", "Manas123@", {
    host: "localhost",
    dialect:"mysql"
})

// For checking the connection
sequelize.authenticate().then((data) => {
    console.log("Connection SuccessFully Established" ,data);
}).catch((err) => {
    console.log(err)
})


module.exports = sequelize;
