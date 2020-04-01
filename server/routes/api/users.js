const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");


//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Load User model
const User = require("../../models/UserSchema");

router.post("/Signup", (req,res) => {
    //Form validation
    const {errors, isValid } = validateRegisterInput(req.body);

    //Check validation
    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne( {email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                natalSign: req.body.natalSign,
                name: {
                    first: req.body.name.first,
                    last: req.body.name.last
                },
                DOB: {
                    month: req.body.DOB.month,
                    day: req.body.DOB.day,
                    year: req.body.DOB.year
                },
                location: {
                    city: req.body.location.city,
                    state: req.body.location.state,
                    zip: req.body.location.zip
                },
                time: {
                    hour: req.body.time.hour,
                    minute: req.body.time.minute
                },
                email: req.body.email,
                number: req.body.number,
                password: req.body.password,
                admin: req.body.admin
            });

            //Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => console.log(user))
                    .catch(err => console.log(err));
                });
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
            const apikey = Buffer.from(require('../../config/config.js').mc.auth || process.env.MC_AUTH).toString('base64');

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
        }
    });
});

router.post("/login", (req, res) => {
    //Form validation
    const { errors, isValid } = validateLoginInput(req.body);

    //Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    else console.log('Valid login input');

    const email = req.body.email;
    const password = req.body.password;

    //Find user by email
    User.findOne({ email }).then(user => {
        //Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        //Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                //User matched
                //Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };

                //Sign token
                jwt.sign(
                    payload,
                    // keys.secretOrKey,
                    process.env.secret || require('../../config/config.js').secretOrKey,
                    {
                        expiresIn: 31556926     // 1 year in seconds
                    },
                    (err, token) => {
                        res.json( {
                            user: user,
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
                console.log('correct password');
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

module.exports = router;