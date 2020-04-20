const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const risingSign = require('../../controllers/newHoroscopeController.js');


//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Load User model
const User = require("../../models/UserSchema");

const Email = require("../../models/EmailSchema");

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

            const apikey = Buffer.from(process.env.MC_AUTH || require('../../config/config.js').mc.auth).toString('base64');

            // Calculate user rising sign
            risingSign(req, res, (natalSign) => {
                newUser.natalSign = natalSign;

                // Add user to Mailchimp audience
                axios({
                    method: 'post',
                    url: 'https://us19.api.mailchimp.com/3.0/lists/5a18df374b/members',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + apikey,
                    },
                    data: {
                        email_address: req.body.email,
                        status: "subscribed",
                        merge_fields: {
                            FNAME: req.body.name.first,
                            LNAME: req.body.name.last,
                            BIRTHDAY: req.body.DOB.month + '/' + req.body.DOB.day,
                        },
                        tags: [natalSign]
                    },
                })
                    .then(response => {
                        console.log('Post to MailChimp success!');
                        res.send("Success!");
                        newUser.hash = response.data.id;

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
                    })
                    .catch(err => {
                    console.log('Mailchimp subscribe post failed.');
                    console.log(err.response.data);
                    res.send('Error')
                });
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

<<<<<<< HEAD

router.post("/getDataForEmail", (req,res) => {

    const email = req.body.email;


    User.findOne({ email }).then(user => {
        //Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }else{

            res.json( {
                user: user,
            });

        }


        });

});


router.put("/changeEmail", (req,res) => {

    const filter = {email: req.body.old};
    const update = {email: req.body.new};


    User.findOneAndUpdate(filter, update, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });


});



router.put("/changePassword", (req,res) => {

    const email = req.body.email;


    User.findOne({ email }).then(user => {
        //Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        bcrypt.compare(req.body.old, user.password).then(isMatch => {
            if(isMatch){


                const filter = {email: req.body.email};

                //encrypt new password

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.new1, salt, (err, hash) => {
                        if (err) throw err;

                        if(hash === user.password){
                            console.log("sumn wrong")
                        }

                        //change password in database

                        const update = {password: hash};


                        User.findOneAndUpdate(filter, update, {upsert: true}, function(err, doc) {
                            if (err) return res.send(500, {error: err});
                            return res.send('Succesfully saved.');
                        });

                    });
                });


            }else{
                console.log("passwords do not match")
            }

        });


    });






});

router.patch("/unsubscribe", (req, res) => {
    User.findOne({email: req.body.email}, (err, doc) => {
        if (err) console.log(err);
        else{
            const apikey = Buffer.from(process.env.MC_AUTH || require('../../config/config.js').mc.auth).toString('base64');

            axios({
                method: 'patch',
                url: 'https://us19.api.mailchimp.com/3.0/lists/5a18df374b/members/' + doc.hash,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + apikey,
                },
                data: {
                    status: 'unsubscribed'
                }
            })
                .then(response => {
                    console.log(doc.email + ' has unsubscribed.');
                    res.send('Unsubscribe successful');
                })
                .catch(err => console.log(err.response.data))
            }
    })
=======
router.get("/userlist", (req, res) => {
    
    User.find({}).exec((err, results)=> {
        if(err) throw err;
        res.json(results);
    })
        
});

router.get("/emaillist", (req, res) => {
    
    Email.find({}).exec((err, results)=> {
        if(err) throw err;
        res.json(results);
    })
        
>>>>>>> emailDatabase
});

module.exports = router;