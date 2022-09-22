import "./connection.js";
import registerschemamodel from "../schema/registerschema.js"; 
import categoryschemamodel from "../schema/categoryschema.js";

class indexmodel
{
   userregistermodel(userdetails)    
   {
       return new Promise((resolve,reject)=>{
        //   db.collection('register').insertOne(userdetails,(err,result)=>{
            //   err ? reject(err) : resolve(result);
            // a ddocument instance
            var obj=new registerschemamodel(userdetails);
            //save model to database
            obj.save((err,result)=>{
                err ? reject(err) : resolve(result);
            });
          })
          
   }
   fetchusers(condition_obj)
   {
    return new Promise((resolve,reject)=>{
        // to find record from collections
        registerschemamodel.find(condition_obj,(err,result)=>{
            err ? reject(err) : resolve(result);
        })
    })
   }

   fetchcategorymodel(condition_obj)
   {
    return new Promise((resolve,reject)=>{
        categoryschemamodel.find(condition_obj,(err,result)=>{
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
   }
}
export default new indexmodel();