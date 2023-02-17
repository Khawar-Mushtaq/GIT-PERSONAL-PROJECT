const express=require("express")
const {addProduct,getAllProduct}=require("../Controller/product.controller")
const routes=express.Router()

routes.get("/getproduct",getAllProduct)
routes.post("/addproduct",addProduct)

module.exports=routes