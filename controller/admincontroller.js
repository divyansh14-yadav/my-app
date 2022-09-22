 import * as path from 'path';
 import * as url from 'url';
 import indexmodel from "../models/indexmodel.js";
 import adminmodel from "../models/adminmodel.js";
 
 const __dirname=url.fileURLToPath(new URL('.',import.meta.url))
 
class admincontroller
{
/*   userregister(userdetails)
{
     return new Promise((resolve,reject)=>{
        indexmodel.fetchusers({}).then((result)=>{
            var l=result.length
            var _id=1==0 ? 1 : result [l-1]._id+1;
    
       userdetails={...userdetails,_id:_id,role:"user",status:1,info:Date()};
         indexmodel.userregistermodel(userdetails) .then((result)=>{
             resolve(result);
         }).catch((err)=>{
             reject(err);
         })
     }).catch((err)=>{
        reject(err);
     })
    })
}
userlogin(userdetails)
{
    return new Promise((resolve,reject)=>{
        userdetails={...userdetails,'status':1}
        indexmodel.fetchusers(userdetails).then((result)=>{
          var s=result.length==0 ? 0 : (result[0].role=="admin" ? 1:2 );
          
            resolve({"s":s});
        }).catch((err)=>{
            reject(err);
    })
        
    })
}*/

fetchusers()
{
    return new Promise((resolve,reject)=>{
       var condition_obj={'role':'user'} 
        indexmodel.fetchusers(condition_obj).then((result)=>{
        // var s=result.length==0 ? 0 : (result[0].role=="admin" ? 1:2 );
          
            resolve(result);
        }).catch((err)=>{
            reject(err);
    })
        
    })
}
manageuserstatus(sdetails)
{
    return new Promise((resolve,reject)=>{
    adminmodel.manageuserstatusmodel(sdetails).then((result)=>{
        resolve(result);
    }).catch((err)=>{
       reject(err); 
    })
})
}
addcategory(catnm,fileobj)
{
return new Promise((resolve,reject)=>{
    adminmodel.fetchcategory({}).then((result)=>{
        var l=result.length
        var _id=l==0 ? 1 : result [l-1]._id+1;
var caticonnm=Date.now()+"-"+fileobj.name
   var cdetails={"_id":_id,"catnm":catnm,"caticonnm":caticonnm}
   adminmodel.addcategorymodel(cdetails).then((result)=>{
    var upload_path=path.join(__dirname,"../public/uploads/categoryicons",caticonnm)
    fileobj.mv(upload_path);
    resolve(result);
}).catch((err)=>{
   reject(err); 
})
 }).catch((err)=>{
    reject(err);
 })
})
}
}
export default new admincontroller();