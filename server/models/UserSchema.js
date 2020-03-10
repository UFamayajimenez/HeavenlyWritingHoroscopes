import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    natalSign: {type: String},
    name: {type: String, required: true},
    DOB: {month:{type : String}, day:{type : String}, year:{type : String}, type: JSON, required: true},
    location: {type: String},
    time: {hour:{type : String}, minute:{type : String}},
    email: {type: String, required: true},
    number: {type: String},
    password: {type: String, required: true}
    //Check out - https://mongoosejs.com/docs/guide.html
});

export default mongoose.model('user', userSchema);
