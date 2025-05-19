const express=require("express")
const router=express.Router()

const {getAllPro,addPro,deltePro,updatePro}=require("../controllers/product")

router.get("/getAll",getAllPro)
router.post("/add",addPro)
router.delete("/:id",deltePro)
router.put("/:id",updatePro)

module.exports=router
//http://localhost:3000/api/product/getAll