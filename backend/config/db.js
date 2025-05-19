const {Sequelize,DataTypes}=require("sequelize")
const sequelize=new Sequelize("myparfums","root","root",{
host:"localhost",
dialect:"mysql",    
})

sequelize.authenticate()
.then(()=>{
    console.log("conncted to database successfully");
})
.catch((err)=>{
    console.log("unable to connect to the database",err);
    
})

const db={}
db.sequelize=sequelize
db.Sequelize=Sequelize

db.Product=require("../model/product")(sequelize,DataTypes)
sequelize.sync({alter:true})
.then(()=>{console.log("database is synced")})
.catch((err)=>{console.log(err)})

module.exports =db