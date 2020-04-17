const axios = require("axios"),
    EmailModel = require('./models/EmailSchema.js');

const apikey = Buffer.from(process.env.MC_AUTH || require('./config/config.js').mc.auth).toString('base64');
let newid = '';

const sendEmailScript = () => {
    const aSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    // First: Calculate current moon phase + sign
    const mPhase = '5';
    const mSign = 'Pisces';

    // Search database for existing email with that moon phase/sign combo for each ascendant sign
    aSigns.forEach((aSign, i) => {

    });
};


// Send unsent email -- need campaign id
// axios({
//     method: 'post',
//     url: 'https://us19.api.mailchimp.com/3.0/campaigns/59fbc07be5/actions/replicate',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + apikey,
//     },
// })
//     .then(response => {
//         console.log("Campaign sent!");
//     })
//     .catch(err => {
//         console.log(err.response.data);
//         console.log(err.response.data.errors);
//     });



// send campaign that has already been send
// axios({
//     method: 'post',
//     url: 'https://us19.api.mailchimp.com/3.0/campaigns/59fbc07be5/actions/replicate',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + apikey,
//     },
// })
//     .then(response => {
//         console.log("Campaign replicated!");
//         axios({
//             method: 'post',
//             url: 'https://us19.api.mailchimp.com/3.0/campaigns/' + response.data.id + '/actions/send',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Basic ' + apikey,
//             },
//         })
//             .then(response2 => {
//                 console.log("Campaign sent!");
//             })
//             .catch(err => {
//                 console.log(err.response.data);
//                 console.log(err.response.data.errors);
//             });
//
//     })
//     .catch(err => {
//         console.log(err.response.data);
//         console.log(err.response.data.errors);
//     });


// Create new email for specific tag ID, update the content using Template 5 ID + content from database
// axios({
//     method: 'post',
//     url: 'https://us19.api.mailchimp.com/3.0/campaigns/',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + apikey,
//     },
//     data: {
//         type: 'regular',
//         recipients: {
//             list_id: '5a18df374b',
//             segment_opts: {
//                 saved_segment_id: 262971
//             }
//         },
//         settings: {
//             subject_line: 'This is a test create email',
//             title: 'test email creation #8',
//             from_name: 'Heavenly Writing',
//             reply_to: 'heavenlywriting2020@gmail.com',
//             to_name: '*|FNAME|*'
//         }
//     }
// })
//     .then(response => {
//         console.log('Create new email success!');
//         newid = response.data.id;
//         console.log(newid);
//         axios({
//             method: 'put',
//             url: 'https://us19.api.mailchimp.com/3.0/campaigns/'+ newid + '/content/',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Basic ' + apikey,
//             },
//             data: {
//                 template: {
//                     id: 149623,
//                     sections: {
//                         header: 'Test update content',
//                         body: 'Here is a test horoscope. You will stay at home for weeks on end in quarantine.'
//                     }
//                 }
//             }
//         })
//             .then(response2 => {
//                 console.log('Update content success!');
//                 console.log(response2.data);
//             }).catch(err => {
//             console.log(err);
//             console.log(err.response.data.errors);
//         });
//     }).catch(err => {
//     // console.log(err);
//     console.log(err.response.data.errors);
// });

