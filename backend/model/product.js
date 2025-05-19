
module.exports=(sequelize,DataTypes)=>{
    const product=sequelize.define("Product",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        price:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        image:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        category:{
type: DataTypes.ENUM("men", "women"),
            allowNull:false,
        }

    })
    return product
}