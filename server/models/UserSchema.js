var mongoose = require('mongoose');

//Maybe should have a userID so that we don't have to rely on 
//multiple checks to make sure user is unique.
const userSchema = new mongoose.Schema({
    natalSign: {type: String},
    name: {type: String, required: true},
    DOB: {month:{type : String}, day:{type : String}, year:{type : String}, type: JSON, required: true},
    location: {city:{type : String}, state:{type : String}, zip:{type : String}, type: JSON, required: true},
    time: {hour:{type : String}, minute:{type : String}},
    email: {type: String, required: true},
    number: {type: String},
    password: {type: String, required: true}
    //Check out - https://mongoosejs.com/docs/guide.html
});

const info = function(userName, callback) {
    var user = mongoose.model('User', userSchema);
    user.findOne({'name': userName}, function (err, userschema){
        if (err) console.log("error 8");
        console.log('found: ', userschema);
        callback("", userschema)
    });
}

module.exports = {
    all: mongoose.model('user', userSchema),
    info: info
};

