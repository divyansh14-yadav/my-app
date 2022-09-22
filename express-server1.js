import express from 'express';

const app=express();
app.get("/",(req,res)=>{
    res.send("<h1>welcome express</h1>");
});
app.listen(3000);
console.log("server invoked at link http://localhost:3000");