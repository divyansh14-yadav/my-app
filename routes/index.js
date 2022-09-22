import express from 'express';
import * as url from 'url';
import indexcontroller from '../controller/indexcontroller.js';
import nodeMailApi from "./mailapi.js"

const indexRouter = express.Router();

// middleware function to implement application level security:visitor pannel

// indexRouter.all("/login",(req,res,next)=>{
//     if(req.session.sunm!=undefined)
//    {
//     req.session.sunm=undefined;
//     req.session.srole=undefined;
//    }
//     next();
// })

indexRouter.get("/",(req,res)=>{
    // res.send("<h1>/ or /home url invoked, visitors routers</h1>");
    indexcontroller.fetchcategory({}).then((result)=>{
       // console.log(result);
        res.render("home",{"result":result});
    }).catch((err)=>{
        console.log(err);
    })
 });

indexRouter.get("/about",(req,res)=>{
   // res.send("<h1>/about url invoked, visitors routers</h1>");


   res.render("about");
});

indexRouter.get("/contact",(req,res)=>{
    //res.send("<h1>/contact url invoked, visitors routers</h1>");
    res.render("contact");
});

indexRouter.get("/service",(req,res)=>{
    //res.send("<h1>/service url invoked, visitors routers</h1>");
    res.render("service");
});

indexRouter.get("/register",(req,res)=>{
    //res.send("<h1>/service url invoked, visitors routers</h1>");
    //console.log("ui page open , Method GET")
    res.render("register",{"output":""});
});

indexRouter.post("/register",(req,res)=>{
    //res.send("<h1>/service url invoked, visitors routers</h1>");
   // console.log("ui page open , Method POST")
    //console.log(req.body);
    indexcontroller.userregister(req.body).then((result)=>{
        nodeMailApi.sendEmail(req.body);
        res.render("register",{"output":"user register sucesfull",status});
        // res.send({"output":"user register sucesfull"});
    }).catch((err)=>{
        console.log(err);
        res.render("register",{"output":err});
        // res.send({"output":"user registration failed"});
    });
});

indexRouter.get("/verifyuser",(req,res)=>{
    //res.send("<h1>/service url invoked, visitors routers</h1>");
    //console.log("ui page open , Method GET")
    var urlobj=url.parse(req.url,true).query
    indexcontroller.verifyuser(urlobj).then((result)=>{
        res.redirect("/login")
    }).catch((err)=>{
        console.log(err);
        
    });
});

indexRouter.get("/product",(req,res)=>{
    //res.send("<h1>/product url invoked, visitors routers</h1>");
    res.render("product");
});

indexRouter.get("/login",(req,res)=>{
    //res.send("<h1>/login url invoked, visitors routers</h1>");
    res.render("login",{"output":""});
});
indexRouter.post("/login",(req,res)=>{
    //res.send("<h1>/login url invoked, visitors routers</h1>");
    indexcontroller.userlogin(req.body).then((result)=>{
        if(result.s==1||result.s==2)
        {
            req.session.sunm=req.body.email
            var srole=result.s==1?"admin":"user";
            req.session.srole=srole
        }
       result.s==0 ? res.render("login",{"output":"invalid user or verify your account..."}):(result.s==1 ? res.redirect("/admin"):res.redirect("/user"));
    //    result.s==0 ? res.send({"output":"invalid user or verify your account..."}):(result.s==1 ? res.send({"output":"login as admin"}):res.send({"output":"login as user"}));               
    }).catch((err)=>{
        res.render("login",{"output":err});
    })       
});
export default indexRouter;
