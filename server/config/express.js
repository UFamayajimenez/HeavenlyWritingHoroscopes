const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    exampleRouter = require('../routes/examples.server.routes'),
    cors = require('cors'),
    newUserController = require('../controllers/newUserController.js'),
    passport = require("passport"),
    users = require("../routes/api/users"),
    emails = require("../routes/api/emails.js");
    newHoroscopeController = require('../controllers/newHoroscopeController.js');


module.exports.init = () => {
    /*
        connect to database
        - reference README for db uri
    */
    mongoose.connect(process.env.DB_URI || require('./config.js').db.uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => {
        console.log(`Successfully connected to mongoose database.`)
    });

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(
        bodyParser.urlencoded({
            extended: false
        })
    );
    app.use(bodyParser.json());

    app.use(cors());

    //Passport middleware
    app.use(passport.initialize());

    // Passport config
    require("../config/passport")(passport);

    // Routes
    app.use("/api/users", users);
    app.use("/api/emails", emails);

    app.post('/Horoscope', newHoroscopeController);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        app.post('/SignUp', newUserController);

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    app.use(express.static(path.join(__dirname, '../../client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
    });


    return app
};

