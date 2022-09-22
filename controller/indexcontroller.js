import indexmodel from "../models/indexmodel.js";
class indexcontroller
{
   userregister(userdetails)
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
}
verifyuser(urlobj)
{
    return new Promise((resolve,reject)=>{

   indexmodel.verifyusermodel(urlobj).then((result)=>{
      resolve(result)
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
}
fetchcategory(condition_obj)
{
    return new Promise((resolve,reject)=>{
        indexmodel.fetchcategorymodel(condition_obj).then((result)=>{
          
            resolve(result);
        }).catch((err)=>{
            reject(err);
    })
        
    })
}

}
export default new indexcontroller();