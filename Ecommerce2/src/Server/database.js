const mysql=require("mysql2")

const mysqlconnection=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Khawar@786",
    database:"ecommerceproduct"
})

mysqlconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("DataBase is connected")
    }
})
module.exports=mysqlconnection