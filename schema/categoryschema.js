import mongoose from 'mongoose';
import uniquevalidattor from 'mongoose-unique-validator';

const categoryschema=mongoose.Schema({
    _id:Number,
    catnm:{
        type:String,
        required:[true,"category name is required"],
        lowercase:true,
        trim:true,
        unique:true,
    },
    caticonnm:{
        type:String,
        required:[true,"category icon is required"],
        trim:true,
        
    },
    });

categoryschema.plugin(uniquevalidattor);

const categoryschemamodel=mongoose.model('category',categoryschema,'category');

export default categoryschemamodel