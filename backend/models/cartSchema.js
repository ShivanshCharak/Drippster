import {mongoose} from 'mongoose';


const cartSchema = new mongoose.Schema({
    productId:[],
    key:string, //object id of the username
})

const CartSchema = mongoose.model("CartSchema", cartSchema)
module.exports = CartSchema