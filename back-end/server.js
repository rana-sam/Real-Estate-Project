const express =require("express");
require("../backend/db");
 const User=require("./model/userModel")
const app=express();
const http=require("http")
const port =5000;
app.use(express.json())
const user=require("./user")
const server =http.createServer((req,res)=>{{
 console.log("server is created");
}})

app.use(user)


app.listen(port,()=>{
    console.log("server is running on port",port);
})