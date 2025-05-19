const express=require("express")
const app=express()
const cors =require("cors")
const PORT =3000
const db=require("./config/db")
const productRoutes=require("./routes/product")
app.use(cors())
app.use(express.json())

app.use("/api/product",productRoutes)

app.get("/",function(req,res){
    console.log("hello from man route");
    res.send("welcome to the my perfume shop")
})


app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
    
})