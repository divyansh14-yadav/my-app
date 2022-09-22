import express from 'express';
import * as url from 'url';
import admincontroller from '../controller/admincontroller.js';
const adminRouter=express.Router();
// // middleware function to implement application level security:admin pannel

// adminRouter.use((req,res,next)=>{
//     if(req.session.sunm==undefined||req.session.srole!="admin")
//     res.redirect("/login");
//     next();
// })



adminRouter.get("/",(req,res)=>{
    res.render("adminhome",{"sunm":req.session.sunm});

});

adminRouter.get("/manageuser",(req,res)=>{
    admincontroller.fetchusers().then((result)=>{
        res.render("manageuser",{"userdetails":result,"sunm":req.session.sunm});
    }).catch((err)=>{
      console.log(err);
    })
    

});
adminRouter.get("/manageuserstatus",(req,res)=>{
   var sdetails=url.parse(req.url,true).query;    // sdtails=status details
    admincontroller.manageuserstatus(sdetails).then((result)=>{
     res.redirect("/admin/manageuser")
    }).catch((err)=>{
       console.log(err)
    })
})
adminRouter.get("/addcategory",(req,res)=>{
    res.render("addcategory",{"sunm":req.session.sunm,"output":""});

});
adminRouter.post("/addcategory",(req,res)=>{
    //console.log(req.files);
    admincontroller.addcategory(req.body.catnm,req.files.caticon).then((result)=>{
        res.render("addcategory",{"sunm":req.session.sunm,"output":"Category added succesfully"});
    }).catch((err)=>{
        console.log(err);
    });
    

});
// adminRouter.get("/cpadmin",(req,res)=>{
//     res.send("<h1>/about url invoked, admin routers</h1>");
// });

// adminRouter.get("/epadmin",(req,res)=>{
//     res.send("<h1>/contact url invoked, admin routers</h1>");
// });

// adminRouter.get("/manageuser",(req,res)=>{
//     res.send("<h1>/manageuser url invoked, admin routers</h1>");
// });


export default adminRouter;
