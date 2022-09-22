import mongoose from 'mongoose';
import uniquevalidattor from 'mongoose-unique-validator';

const registerschema=mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        required:[true,"name is required"],
        lowercase:true,
        trim:true,
    },
    email:{
        type:String,
        required:[true,"username is required"],
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        maxlength:10,
        minlength:5,
        trim:true,
    },
    mobile:{
        type:String,
        required:[true,"mobile is required"],
        maxlength:10,
        minlength:10,
        trim:true,
    },
    address:{
        type:String,
        required:[true,"address is required"],
        trim:true,
    },
    city:{
        type:String,
        required:[true,"city is required"],
        trim:true,
    },
    gender:{
        type:String,
        required:[true,"gender is required"],
    },
    role:String,
    status:Number,
    info:String
});

registerschema.plugin(uniquevalidattor);

const registerschemamodel=mongoose.model('register',registerschema,'register');

export default registerschemamodel