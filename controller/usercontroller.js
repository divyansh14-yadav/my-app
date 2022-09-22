import usermodel from "../models/usermodel.js";
class usercontroller
{
    payment(urldetails)
{
     return new Promise((resolve,reject)=>{
        usermodel.fetchpayment({}).then((result)=>{
            var l=result.length
            var _id=l==0 ? 1 : result [l-1]._id+1;
    
     var  paymentdetails={_id:_id,urserid:urldetails.sunm,price:parseInt(urldetails.price),info:Date()};
         usermodel.userpaymentmodel(paymentdetails).then((result)=>{
             resolve(result);
         }).catch((err)=>{
             reject(err);
         })
     }).catch((err)=>{
        reject(err);
     })
    })
}
/*userlogin(userdetails)
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
}*/


}
export default new usercontroller(); 