import mongoose from "mongoose";
const url="mongodb://localhost:27017/myproject";
mongoose.connect(url);
// const db=mongoose.connection;
//  export default db;
console.log("sucessfully coonected to the mongo db database");
