const Product=require("../Model/product.model")
const addProduct=async(req,res)=>{
    console.log("inside register page")
    const products=await Product.create({...req.body})
    res.send({
        products,
        message:"Add Product Successfully"
    })
}
const getAllProduct=async(req,res)=>{
    console.log("inside get product")
    const products=await Product.find({})
    res.send({
        products,
        message:"Get Product Successfully"
    })
}

module.exports={
    addProduct,getAllProduct
}