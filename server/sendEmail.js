const axios = require("axios"),
    EmailModel = require('./models/EmailSchema.js'),
    mongoose = require('mongoose');

const apikey = Buffer.from(process.env.MC_AUTH || require('./config/config.js').mc.auth).toString('base64');

const sendEmailScript = () => {
    const aSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    // First: Calculate current moon phase + sign
    const mPhase = '6';
    const mSign = 'Leo';

    // Second: search database for existing email with that moon phase/sign combo for each ascendant sign
    aSigns.forEach((aSign, i) => {
        EmailModel.findOne({audience: {natalSign: aSign, moonPhase: mPhase, moonSign: mSign}}, (err, email) => {
            if (err) console.log(err);
            else if (email) {
                checkStatus(email.cid, (sent) => {
                    if (sent) replicateEmail(email.cid, (newID) => {
                        email.cid = newID;
                        sendEmail(newID);
                    });
                    else sendEmail(email.cid);
                });
            }
            else{
                console.error('No email exists for ' + aSign + '|' + mPhase + '|' + mSign);
            }
        })
    });
};

const checkStatus = (cid, callback) => {
    axios({
        method: 'get',
        url: 'https://us19.api.mailchimp.com/3.0/campaigns/' + cid + '?fields=status',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + apikey,
        },
    })
        .then(response => {
            console.log("Email status: " + response.data.status);
            callback(response.data.status === 'sent');
        })
        .catch(err => {
            console.log(err.response.data);
            console.log(err.response.data.errors);
        });

};

const replicateEmail = (cid, callback) => {
    axios({
        method: 'post',
        url: 'https://us19.api.mailchimp.com/3.0/campaigns/' + cid + '/actions/replicate',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + apikey,
        },
    })
        .then(response => {
            console.log("Campaign replicated!");
            callback(response.data.id);
        })
        .catch(err => {
            console.log(err.response.data);
            console.log(err.response.data.errors);
        });
};

const sendEmail = (cid) => {
    axios({
        method: 'post',
        url: 'https://us19.api.mailchimp.com/3.0/campaigns/' + cid +'/actions/send',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + apikey,
        },
    })
        .then(response => {
            console.log("Campaign sent!");
        })
        .catch(err => {
            console.log(err.response.data);
            console.log(err.response.data.errors);
        });
};

module.exports = sendEmailScript;