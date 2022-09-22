import mongoose from 'mongoose';
import uniquevalidattor from 'mongoose-unique-validator';

const paymentschema=mongoose.Schema({
    _id:Number,
    userid:String,
    price:Number,
    info:String
});

paymentschema.plugin(uniquevalidattor);

const paymentschemamodel=mongoose.model('payment',paymentschema,'payment');

export default paymentschemamodel