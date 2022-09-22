import "./connection.js"; 
import paymentschemamodel from "../schema/paymentschema.js";

class usermodel
{
    userpaymentmodel(paymentdetails)   
   {
       return new Promise((resolve,reject)=>{
        //   db.collection('register').insertOne(userdetails,(err,result)=>{
            //   err ? reject(err) : resolve(result);
            var obj=new paymentschemamodel(paymentdetails);
            obj.save((err,result)=>{
                err ? reject(err) : resolve(result);
            });
          })
          
   }
   /*fetchusers(condition_obj)
   {
    return new Promise((resolve,reject)=>{
        registerschemamodel.find(condition_obj,(err,result)=>{
            err ? reject(err) : resolve(result);
        })
    })
   }
   
   verifyusermodel(urlobj)
   {
        return new Promise ((resolve,reject)=>{
        registerschemamodel.updateOne(urlobj,{$set:{"status":1}},(err,result)=>{
            err ? reject(err) : resolve(result);
           })

       })
   }*/
   fetchpayment(condition_obj)
   {
    return new Promise((resolve,reject)=>{
        paymentschemamodel.find(condition_obj,(err,result)=>{
            err ? reject(err) : resolve(result);
        })
    })
   }
}
export default new usermodel();