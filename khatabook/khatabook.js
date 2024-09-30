const express =require('express');
const app =express();
const path=require("path");
const fs =require("fs");
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("hello world anant");
})
app.get("/create",(req,res)=>{
    const currentDate = new Date();
    const day =String(currentDate.getDate()).padStart(2,'0');
    const month=String(currentDate.getMonth() +1).padStart(2,'0');
    const year =currentDate.getFullYear();
    console.log(`${day}-${month}-${year}`)
    fs.writeFile()
})
app.listen(3000);
