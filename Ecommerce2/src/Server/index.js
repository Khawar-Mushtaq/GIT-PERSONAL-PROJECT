const express=require("express")
const app=express()
const bodyParse=require("body-parser")
const PORT=4000
const cors=require("cors")
const connection=require("./database")
app.use(bodyParse.json())
app.use(cors())
app.get("/getdata", (req, res) => {
    connection.query("SELECT * FROM headphoneproduct", (err, row) => {
      if (err) {
        console.error(err);
      } else {
        res.send(row);
      }
    });
  });
app.post("/register",(req,res)=>{
  const userdata=[req.body.email,req.body.username,req.body.password];
  connection.query("INSERT INTO users(email,username,password) value(?)",[userdata],(err,row)=>{
    if(err){
      console.log(err)
    }
    else{
      res.send(row)
    }
  })
})
app.post("/login",(req,res)=>{
  const { username, password } = req.body;
  connection.query("SELECT * FROM users WHERE username=?",[username],(err,row)=>{
    if(err){
      console.log(err)
    }
    else{
      if (row.length > 0) {
        if (row[0].password === password) {
          console.log('Login successful');
          res.send(row)
        } else {
          console.log('Incorrect password');
        }
      } else {
        console.log('User not found');
      }
    }
  })
})
app.post("/postproductdata",(req,res)=>{

    const data=req.body;
    const productdata=[data.ProductName,data.Nproduct]
    connection.query("INSERT INTO headphoneproduct(ProductName,Nproduct) value(?)",[productdata],(err,row)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(row)
        }
    })
})
app.listen(PORT,()=>{
    console.log(`Backend is running on the Port ${PORT}`)
})