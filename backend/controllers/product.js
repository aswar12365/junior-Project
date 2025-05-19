const db=require("../config/db")
const product=require("../model/product")
const Product=db.Product
module.exports={
    getAllPro:function(req,res){
        Product.findAll()
        .then((products)=>{
            res.send(products)
        })
        .catch((err)=>{
            res.status(500).send("err :"+err.message)
        })
    },
    addPro:function(req,res){
      console.log("Received product data:",req.body)
        const newpr=req.body
        Product.create(newpr)
        .then(products=>{
            res.json(products)
        })
        .catch((err)=>{
            console.log("error creating product :",err)
            res.status(500).send(`err : ${err.message}`)
        })
    },
    deltePro :function(req,res){
        const id=req.params.id
        Product.destroy({where :{id:id}})
        .then(()=>{
        return Product.findAll()
        })
        .then((products)=>{
            res.json({products:products})
        })
        .catch((err)=>{
            res.status(500).send(`eror :${err.message}`)
        })
    },
    updatePro :function(req,res){
        const id=req.params.id
        Product.update({
            name:req.body.name,
        },
        {
            where :{id:id}
        }
    )
    .then(()=>res.json({message:"nice"}))
    .catch(err=>res.status(500).json({error:err.message}))
    }
}