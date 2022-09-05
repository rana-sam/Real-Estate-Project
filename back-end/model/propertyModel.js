const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//Create Schema

const PropertySchema = new  Schema({
  
    bedrooms: {
        type: String,
        required: true
    },
    bathrooms: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    id:{
        type:String
    }

});

module.exports = Property = mongoose.model('Property', PropertySchema);