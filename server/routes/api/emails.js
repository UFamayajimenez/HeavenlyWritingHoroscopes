const express = require('express'),
    EmailModel = require('../../models/EmailSchema.js'),
    axios = require('axios');

const router = express.Router();

const createCampaign = (data, callback) => {
    const apikey = Buffer.from(process.env.MC_AUTH || require('../../config/config.js').mc.auth).toString('base64');
    let tag = 0;
    let campaignID = '';
    switch(data.audience.natalSign){
        case 'Aries':
            tag = 287715;
            break;
        case 'Taurus':
            tag = 287719;
            break;
        case 'Gemini':
            tag = 287723;
            break;
        case 'Cancer':
            tag = 287727;
            break;
        case 'Leo':
            tag = 287731;
            break;
        case 'Virgo':
            tag = 287735;
            break;
        case 'Libra':
            tag = 287739;
            break;
        case 'Scorpio':
            tag = 287743;
            break;
        case 'Sagittarius':
            tag = 287747;
            break;
        case 'Capricorn':
            tag = 287751;
            break;
        case 'Aquarius':
            tag = 287755;
            break;
        case 'Pisces':
            tag = 287759;
            break;
    }

    // first axios post to create new campaign
    axios({
        method: 'post',
        url: 'https://us19.api.mailchimp.com/3.0/campaigns/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + apikey,
        },
        data: {
            type: 'regular',
            recipients: {
                list_id: '5a18df374b',
                segment_opts: {
                    saved_segment_id: tag
                }
            },
            settings: {
                subject_line: 'Ascendant in ' + data.audience.natalSign + ' Moon in Phase ' + data.audience.moonPhase + ' and in Sign ' + data.audience.moonSign,
                title: data.audience.natalSign + '|' + data.audience.moonPhase + '|' + data.audience.moonSign,
                from_name: 'Heavenly Writing',
                reply_to: 'heavenlywriting2020@gmail.com',
                to_name: '*|FNAME|*'
            }
        }
    })
        .then(response => {
            console.log('Create new email success!');
            campaignID = response.data.id;
            // second axios post updates that newly created campaign with content
            axios({
                method: 'put',
                url: 'https://us19.api.mailchimp.com/3.0/campaigns/'+ campaignID + '/content/',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + apikey,
                },
                data: {
                    template: {
                        id: 149807,
                        sections: {
                            body: data.content
                        }
                    }
                }
            })
                .then(response2 => {
                    console.log('Update content success!');
                    callback(campaignID);
                }).catch(err => {
                console.log(err);
                console.log(err.response.data.errors);
            });
        }).catch(err => {
        console.log(err);
        console.log(err.response.data.errors);
    });
};

router.post("/create", (req, res) => {
    createCampaign(req.body, (newID) => {
        req.body.cid = newID;
        EmailModel.findOne({audience: {natalSign: req.body.audience.natalSign, moonPhase: req.body.audience.moonPhase, moonSign: req.body.audience.moonSign}}, (err, email) => {
            if (err) console.log(err);
            else if (email) {
                email.overwrite(req.body).save(() => {
                    console.log('Existing email overwritten.');
                    res.send('Successfully saved to MongoDB');
                });
            }
            else {
                EmailModel.create(req.body, (err, newEmail) => {
                    if (err) console.log(err);
                    else {
                        console.log('New email created: \n', newEmail);
                        res.send('Successfully saved to MongoDB!');
                    }
                });
            }
        });
    });
});




module.exports = router;
