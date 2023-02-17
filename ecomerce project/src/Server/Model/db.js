const mongoose=require("mongoose")
 
const dbmodel=function(){
    const db =
        "mongodb+srv://EcommerceProject:Khawar786@clusterecommerce.86gy2lc.mongodb.net/test";
      mongoose.set("strictQuery", false);
      mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      mongoose.connection.on("connection",function(){
        console.log(" Connect Successfully",db)
    })
    mongoose.connection.on("error",function(){
        console.log("Error",db)
    })
    mongoose.connection.on("disconnect",function(){
        console.log("disconnected",db)
    })
}
module.exports=dbmodel




// module.exports=function(){
//     const db =
//     "mongodb+srv://Khawar:khawar1@cluster0.s3ea8y3.mongodb.net/test";
//   mongoose.set("strictQuery", false);
//   mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   mongoose.connection.on("connection",function(){
//     console.log(" Connect Successfully",db)
// })
// mongoose.connection.on("error",function(){
//     console.log("Error",db)
// })
// mongoose.connection.on("disconnect",function(){
//     console.log("disconnected",db)
// })
// }
