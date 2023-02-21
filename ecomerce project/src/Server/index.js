const express=require("express")
const routesProducts=require("./Routes/product.route")
const routesAdmin=require("./Routes/admin.routes")
const routesUser=require("./Routes/user.routes")
const app=express()
const cors=require("cors")
const PORT=4000;

app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.use(cors({
    origin:"*"
}))
require("dotenv").config()
app.use((req, res, next) => {
    console.log("method: %s url: %s", req.method, req.url);
    next();
  });
app.use(express.json())
require("./Model/db")()
app.use("/api/Product",routesProducts)
app.use("/api/admin",routesAdmin)
app.use("/api/User",routesUser)
app.listen(PORT,()=>{
    console.log(`Server  is run on http://localhost:${PORT} `)
})