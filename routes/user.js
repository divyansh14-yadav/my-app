import express from 'express';
import * as url from 'url';
 import usercontroller from '../controller/usercontroller.js';
const userRouter=express.Router();


// middleware function to implement application level security:user pannel

// userRouter.use((req,res,next)=>{
//     if(req.session.sunm==undefined||req.session.srole!="user")
//     res.redirect("/login");
//     next();
// })

userRouter.get("/",(req,res)=>{
    res.render("userhome",{"sunm":req.session.sunm});

});

userRouter.get("/funds",(req,res)=>{
   var  paypalURL="http://www.sandbox.paypal.com/cgi-bin/webscr"
   var  paypalID = "sb-lqgua15244151@business.example.com"
    //"sb-43pc4l17522050@personal.example.com"

    res.render("funds",{"sunm":req.session.sunm,"paypalURL":paypalURL,"paypalID":paypalID});

});
userRouter.get("/payment",(req,res)=>{
    var urldetails=url.parse(req.url,true).query
    usercontroller.payment(urldetails).then((result)=>{
        req.session.sunm=urldetails.sunm;
        req.session.srole="user"
        res.redirect("/user/success");
    }).catch((err)=>{
      console.log(err);
    })
});
userRouter.get("/success",(req,res)=>{
    res.render("success",{"sunm":req.session.sunm});

});

userRouter.get("/cancle",(req,res)=>{
    res.render("cancle",{"sunm":req.session.sunm});

});

// userRouter.get("/cpuser",(req,res)=>{
//     res.send("<h1>/cpuser url invoked, user routers</h1>");
// });

// userRouter.get("/epuser",(req,res)=>{
//     res.send("<h1>/epuser url invoked, user routers</h1>");
// });

// userRouter.get("/addproduct",(req,res)=>{
//     res.send("<h1>/addproduct url invoked, user routers</h1>");
// });
export default userRouter;
