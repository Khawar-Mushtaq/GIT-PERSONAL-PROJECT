const express=require("express")
const {registerAdmin,loginadmin}=require("../Controller/admin.controller")
const routes=express.Router()

routes.post("/adminregister",registerAdmin)
routes.post("/adminlogin",loginadmin)

module.exports=routes