var UserModel = require('../models/UserSchema.js');
axios = require('axios');


// This may be a dead file we can remove

const create = async (req, res) => {
    console.log('post request received');


    // TODO: hash encryption on user data
    // Design JSON
    const data = {
        natalSign: req.body.natalSign,
        name: req.body.name.first + ' ' + req.body.name.last,
        DOB: {month: req.body.DOB.month, day: req.body.DOB.day, year: req.body.DOB.year},
        location: {city: req.body.location.city, state: req.body.location.state, zip: req.body.location.zip},
        time: {hour: req.body.time.hour, minute: req.body.time.minute},
        email: req.body.email,
        number: req.body.number,
        password: req.body.password
    };

    // Add user to mongoDB
    await UserModel.create(data, (err, newListing) => {
        if (err) console.log(err);
        else {
            console.log('New user saved: ', newListing);
        }
    });

    // Add user to MailChimp audience
    const body = {
        email_address: req.body.email,
        status: "subscribed",
        merge_fields: {
            FNAME: req.body.name.first,
            LNAME: req.body.name.last,
            BIRTHDAY: req.body.DOB.month + '/' + req.body.DOB.day,
        },
    };

    const uri = 'https://us19.api.mailchimp.com/3.0/lists/5a18df374b/members';
    const apikey = Buffer.from(require('../config/config.js').mc.auth || process.env.MC_AUTH).toString('base64');

    axios({
        method: 'post',
        url: uri,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + apikey,
        },
        data: body,
    })
        .then(response => {
            console.log('Post to MailChimp success!');
            res.send("Success!");
        }).catch(err => {
             console.log(err);
             console.log(err.response.data.errors[0]);
            res.send('Error')
    });

};

module.exports = create;