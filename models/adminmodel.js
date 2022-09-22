import "./connection.js";
import registerschemamodel from "../schema/registerschema.js";
import categoryschemamodel from "../schema/categoryschema.js";

class adminmodel
{
//    userregistermodel(userdetails)    
//    {
//        return new Promise((resolve,reject)=>{
//         //   db.collection('register').insertOne(userdetails,(err,result)=>{
//             //   err ? reject(err) : resolve(result);
//             var obj=new registerschemamodel(userdetails);
//             obj.save((err,result)=>{
//                 err ? reject(err) : resolve(result);
//             });
//           })
          
//    }
//    fetchusers(condition_obj)
//    {
//     return new Promise((resolve,reject)=>{
//         registerschemamodel.find(condition_obj,(err,result)=>{
//             err ? reject(err) : resolve(result);
//         })
//     })
//    }

   
  manageuserstatusmodel(sdetails)
  {
    return new Promise((resolve,reject)=>{
        var condition_obj={"_id":sdetails.regid}
      if(sdetails.s=="block")
      {
        registerschemamodel.updateOne(condition_obj,{$set:{"status":0}},(err,result)=>{
         err ? reject(err) : resolve(result);
        })
      }
      else if(sdetails.s=="unblock")
      {
        registerschemamodel.updateOne(condition_obj,{$set:{"status":1}},(err,result)=>{
            err ? reject(err) : resolve(result);
           })
      }
      else
      {
        registerschemamodel.remove(condition_obj,(err,result)=>{
            err ? reject(err) : resolve(result);
           })
      }
    })
  }
  addcategorymodel(cdetails)    
   {
       return new Promise((resolve,reject)=>{
        //   db.collection('register').insertOne(userdetails,(err,result)=>{
            //   err ? reject(err) : resolve(result);
            var obj=new categoryschemamodel(cdetails);
            obj.save((err,result)=>{
                err ? reject(err) : resolve(result);
                //console.log(result);
            });
          })
        } 
  fetchcategory(condition_obj)
   {
    return new Promise((resolve,reject)=>{
        categoryschemamodel.find(condition_obj,(err,result)=>{
            err ? reject(err) : resolve(result);
        })
    })
   }
}
export default new adminmodel();