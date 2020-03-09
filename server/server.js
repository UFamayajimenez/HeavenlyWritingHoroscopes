import path from 'path';
import express from 'express';      //Require satement  --const express = require('./config/express.js')
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.js';
import cors from 'cors';
import newUserController from "./controllers/newUserController.js";


// Use env port or default --const port = process.env.PORT || 5000;

//connect to database if needed
mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log(`Successfully connected to mongoose database.`)
});
//Old initialization of app middleware  --const app = express.init()
const app = express();

//enable request logging for development debugging
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cors());

//serve static files as needed
app.use('/', express.static('./../../client'));

app.post('/SignUp', newUserController);
//     (req, res) => {
//     console.log('post request received');
//     console.log(req.body);
//     res.send('Success');
// });

/* Request handler for all other routes - default for now
   Sends a response (res) to go to the homepage for all routes not specified */
app.all('/*', (req,res) => {
    res.sendFile(path.resolve('./client/public/index.html')); //'./../../../../client/public/index.html'
});

app.listen(config.port, () => console.log(`Server now running on port ${config.port}!`));