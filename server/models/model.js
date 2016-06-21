var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Create Schema for Users (template ish)
var CustomerSchema = new mongoose.Schema({
    name: {type:String, required: true, min: 2},
    createdDate: {type: String, required: true}
}, {timestamps: true})

var ProductSchema = new mongoose.Schema({
    name: {type:String, required: true, min: 2},
    url: {type:String, min: 6, default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'},
    description: {type: String, required: true},
    available: {type: Number, default: 50}
}, {timestamps: true})

var OrderSchema = new mongoose.Schema({
    customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    quantity: {type: Number, required: true},
    date: {type: String, required: true}
}, {timestamps: true})

//Store the Schema under the name 'User'
var Customer = mongoose.model('Customer', CustomerSchema);
var Product = mongoose.model('Product', ProductSchema);
var Order = mongoose.model('Order', OrderSchema);

////////////////////////////////////////////////////////////
////
////////////////////////////////////////////////////////////
