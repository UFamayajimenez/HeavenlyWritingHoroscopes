import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        first: {type: String, required: true},
        last: {type: String, required: true}
    },
    birth_time: {type: Date, required: true},   //includes date and time of birth
    birth_location: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String},
    username: {type: String, required: true},
    password: {type: String, required: true}
});

export default mongoose.model('user', userSchema);