const express = require('./config/express.js'),
    EmailModel = require('./models/EmailSchema.js'),
    axios = require('axios'),
    sendEmailScript = require('./modules/sendEmail.js');

const app = express.init();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server now running on port ` + port + '!'));

setInterval(sendEmailScript, process.env.interval || 216000000);