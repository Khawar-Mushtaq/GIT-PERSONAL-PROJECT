const User=require("../Model/user.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userRegister=async(req,res)=>{
    console.log("Inside user Register")
    try {
        const {password,...rest}=req.body
        const exist=await User.findOne({email:rest.email})
        if(exist) return res.status(400).send("User Already Exist")
        const user=new User({...rest})
        const salt=await bcrypt.genSalt(12)
        const hashpassword=await bcrypt.hash(password,salt)
        user.password=hashpassword
        user.save()
        res.send({message:"User add successfully"})
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
    }
   
}
const userLogin=async(req,res)=>{
    console.log("inside user login")
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user) return res.status(400).send("user not found")
        try {
            const response=await bcrypt.compare(password,user.password)
            if(response){
                const token=await jwt.sign({
                    id:user._id,
                    email:user.email,
                    username:user.username
                },
                process.env.JWT_PRIVATE_KEY
                )
                res.send({
                    user,
                    token,
                    message:"user login successfully"
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
    userRegister,userLogin
}