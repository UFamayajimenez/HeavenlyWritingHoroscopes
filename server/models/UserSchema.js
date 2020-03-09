import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    natalSign: {type: String, required: true},
    name: {type: String, required: true},
    DOB: {month:{type : mongoose.Number}, day:{type : mongoose.Number}, year:{type : mongoose.Number}, required: true},
    time: {hour:{type : mongoose.Number}, minute:{type : mongoose.Number}},
    email: {type: String, required: true},
    password: {type: String, required: true}
    //Check out - https://mongoosejs.com/docs/guide.html
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
export default mongoose.model('user', userSchema);
