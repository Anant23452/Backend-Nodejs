// file createion

// const fs =require('fs');
// fs.writeFile("abcd.txt", "abcdefghijklmnopqrstuvwxyzABCDEF", function(err, data) {
//     if (err) {
//         console.log("Error writing");}
//         else console.log("file created");
// })

// file reading 

// fs.readFile("abcd.txt", "utf8", function(err, data) {
//     if (err) console.log(err);
//         else console.log(data);
//     })

    // http server 

    // const http = require("http");
    // var server = http.createServer(function(req, res){
    //     console.log(req);
    //     res.end("Go to home page")
    // })
    // server.listen(3000);




    // htttp rounting

    // const http = require("http");
    // var server = http.createServer(function(req,res){
    //     if(req.url ==='/'){
    //         res.end("hello world")
    //     }
    //     else if(req.url ==='/name'){
    //         res.end("Anant kumar patel")
    //     }
    //     else if(req.url ==='/about'){
    //         res.end("Do some epic stuff")
    //     }
    //     else{
    //         res.end("page not found")
    //     }
    // })
    // server.listen(3000);


    // express js use suru hota hai 

    const express = require('express')
const app = express()
// middle ware ko create ka raha ho 

// app.use(function (req, res, next) {
//     let timestamp = Date.now();
//     let date = new Date(timestamp);
//     console.log(date.toString()); // Outputs a human-readable date string
    
//   next()
// })

// session middleware creation 

// var session = require('express-session')
// app.use(session({
//     secret:"random secret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }  // secure: false is not recommended in production environment. It's just for demonstration purpose.  // secure: true is recommended for production environment.  // secure: true makes the cookie httpOnly and only transmitted over HTTPS.  // httpOnly: true means the cookie will not be accessible via JavaScript's Document.cookie property.
// }))
// app.get('/create', function (req, res) {
//     res.session.polo= true;
//   res.send('done');
// })
// app.get('/', function (req, res) {
//   res.send('You are on a Main function')
// })
// app.get('/about', function (req, res) {
//   res.send('Your are on a About page section')
// })
// app.get('*', function (req, res) {
//   res.send('NOthing work than i will wor for  you')
// })
 
// app.listen(3000)


// cookies middlewarconnect

// app.get('/check', function (req, res,next){
//   res.send("check your cookies");
//   console.log(req.cookie.banned);
// })

// app.get("/banned",function(req,res,next){
//   res.cookie("username","true");
//   res.send("Cookies created");
// })


// Morgan middle ware 

// const morgan =require("morgan");
// app.use(morgan('combined'));








// req res kya hota hai 
// app.get("/hota",function(req,res,next){
//   console.log(req.headers);
//   res.send("hota kya hai")
// })




// Dynamic routing 
// app.get("/profile/:username",function(req,res,next){
//     res.send(req.params.username + 's page');
//   })
//   app.get("/author/:username/:age",function(req,res,next){
//     res.send(`Something about ${req.params.username}page who is of ${req.params.age}`)
//   });
// app.listen(3000);



// ejs ka use kaise karna hota hai 



// app.set('view engine','ejs');
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.get('/',function(req,res){
//   res.render("index")
// }) 
// app.post('/must',function(req,res){
//   console.log(req.body);//tabhi work karge jab uper use wala dono likha hoga 
//   res.send("Working")
// }) 
// app.put('/must',function(req,res){
//   console.log(req.body);//tabhi work karge jab uper use wala dono likha hoga 
//   res.send("Working")
// }) 
// app.patch('/must',function(req,res){
//   console.log(req.body);//tabhi work karge jab uper use wala dono likha hoga 
//   res.send("Working")
// }) 
// app.get('/profile',function(req,res){
//   res.render("profile.ejs")
// })










// Error handling 
// app.get('/',function(req,res,next){
//  try{
//   res.render(hey)
//  }
//  catch(err){
//   next(err);
//  }
// }) 
// app.use((err,req,res,next)=>{
//   res.status(500).send(err.message);
// })




// Postman basic get 

var arr =[1,2,3,,4,5];
// app.get("/",function(req,res){
//   res.send("hellow world");
// });
// app.get("/arr",function(req,res){
//   res.send(arr);
// });
// app.post('/arr/:number',(req,res)=>{
// arr.push(parseInt(req.params.number));
// res.send(arr);
// })




// postman variable 
app.get("/api/testing",(req,res)=>{
  res.send("Heloo world");
})

app.listen(3000); 