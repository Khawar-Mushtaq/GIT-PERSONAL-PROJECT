const mongoose = require("mongoose")
const adminSchems=new mongoose.Schema({
    username:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    password:{

    }
})

const Admin=mongoose.model("Admin",adminSchems)
module.exports=Admin