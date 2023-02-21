const Admin=require("../Model/admin.model")
const bycrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const registerAdmin=async(req,res)=>{
    console.log("Inside adminRegister")
    try {
        const {password,...rest}=req.body
        const exist=await Admin.findOne({email:rest.email})
        if(exist) return res.status(400).send("User Already Exist")
        const newAdmin=new Admin({...rest})
        const salt=await bycrypt.genSalt(12)
        const hashpassword=await bycrypt.hash(password,salt)
        newAdmin.password=hashpassword
        newAdmin.save()
        res.send({message:"Add new admin Successfully"})
        
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}
const loginadmin=async(req,res)=>{
    console.log("inside admin login")
    try {
        const {email,password}=req.body
        const newAdmin=await Admin.findOne({email})
        if(!newAdmin) return res.status(400).send("User is already exist")
        try {
            const response=await bycrypt.compare(password,newAdmin.password)
            if(response){
                const token=await jwt.sign({
                    id:newAdmin._id,
                    email:newAdmin.email,
                    username:newAdmin.username
                },
                process.env.JWT_PRIVATE_KEY
                )
                res.send({
                    newAdmin,
                    token,
                    message:"Admin Login Successfully"
                })
            }
        } catch (error) {
            res.status(500).send({
                message:error.message
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
}

module.exports={
    registerAdmin,
    loginadmin
}