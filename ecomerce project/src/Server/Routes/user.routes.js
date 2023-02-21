const express=require("express")
const {userRegister,userLogin}=require("../Controller/user.controller")
const routes=express.Router()

routes.post("/userRegister",userRegister)
routes.post("/userlogin",userLogin)

module.exports=routes