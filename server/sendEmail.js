const axios = require("axios");

// const body = {
//     email_address: req.body.email,
//     status: "subscribed",
//     merge_fields: {
//         FNAME: req.body.name.first,
//         LNAME: req.body.name.last,
//         BIRTHDAY: req.body.DOB.month + '/' + req.body.DOB.day,
//     },
// };

const apikey = Buffer.from(process.env.MC_AUTH || require('./config/config.js').mc.auth).toString('base64');

// Pause automation
// axios({
//     method: 'post',
//     url: 'https://us19.api.mailchimp.com/3.0/automations/1289890ebb/actions/pause-all-emails',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + apikey,
//     },
//     // data: body,
// })
//     .then(response => {
//         console.log('Pause automation success!');
//         console.log(response);
//     }).catch(err => {
//     console.log(err);
//     console.log(err.response.data.errors[0]);
// });

// TODO
// Updating campaign content doesn't work because it is an automated campaign?? doesnt show in list campaigns call
// Doesnt let us place text files into email
// How else can we do this?
// Update email content
// axios({
//     method: 'get',
//     url: 'https://us19.api.mailchimp.com/3.0/automations/1289890ebb/emails/05d8877c69',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + apikey,
//     },
//     data: {
//         template: {
//             id: 149443,
//             sections: {
//                 header: "Test Update Email Content for Aries",
//                 body: "Test update body content for Aries"
//             }
//         }
//     },
// })
//     .then(response => {
//         console.log('Update automation success!');
//         console.log(response.data);
//     }).catch(err => {
//     console.log(err);
//     console.log(err.response.data.errors[0]);
// });


axios({
    method: 'get',
    url: 'https://us19.api.mailchimp.com/3.0/campaigns',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + apikey,
    },
    // data: {
    //     status: 'paused'
    // }
})
    .then(response => {
        console.log('Pause automation success!');
        console.log(response.data);
    }).catch(err => {
    console.log(err);
    console.log(err.response.data.errors[0]);
});
