const express = require('express'),
    EmailModel = require('../../models/EmailSchema.js');

const router = express.Router();

router.post("/create", (req, res) => {
    console.log(req.body);
    EmailModel.create(req.body, (err, newEmail) => {
        if (err) console.log(err);
        else {
            console.log('New email created: \n', newEmail);
            res.send('Success!');
        }
    })
});

module.exports = router;