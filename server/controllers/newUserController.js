import mongoose from 'mongoose';
import UserSchema from '../models/UserSchema.js';

const create = async (req, res) => {
    console.log('post request received');


    // TODO: hash encryption on user data
    const data = {
        natalSign: req.body.natalSign,
        name: req.body.name.first + req.body.name.last,
        DOB: {month: req.body.DOB.month, day: req.body.DOB.day, year: req.body.DOB.year},
        location: req.body.location,
        time: {hour: req.body.time.hour, minute: req.body.time.minute},
        email: req.body.email,
        number: req.body.number,
        password: req.body.password
    };

    await UserSchema.create(data, (err, newListing) => {
        if (err) console.log(err);
        else {
            console.log('New user saved: ', newListing);
            res.send('Success!');
        }
    });
};

export default create;