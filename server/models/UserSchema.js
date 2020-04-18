const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
    natalSign: {
        type: String
    },
    name: {
        first: {type: String, required: true},
        last: {type: String, required: true}
    },
    DOB: {
        month:{type : String}, 
        day:{type : String}, 
        year:{type : String}, 
        type: JSON, required: true
    },
    location: {
        city: {type: String},
        state: {type: String},
        zip: {type: String},
    },
    time: {
        hour:{type : String}, 
        minute:{type : String}
    },
    email: {
        type: String, required: true
    },
    number: {
        type: String
    },
    password: {
        type: String, required: true
    },
    admin: {
        type: Boolean, required: true
    },
    hash: {
        type: String, required: true
    }

   
    //Check out - https://mongoosejs.com/docs/guide.html
});

module.exports = mongoose.model('user', userSchema);
