const express = require('./config/express.js');

const app = express.init();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server now running on port ` + port + '!'));


// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const passport = require("passport");
//
//
// const users = require("./routes/api/users");
//
// const app = express();
//
// //Bodyparser middleware
// app.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// );
// app.use(bodyParser.json());
//
// // DB config
// const db = require("./config/config.js").db.uri;
//
// //Connect to MongoDB
// mongoose
//     .connect(
//         db,
//         { useNewUrlParser: true, useUnifiedTopology: true }
//     )
//     .then(() => console.log("MongoDB successfully connected"))
//     .catch(err => console.log(err));
//
// //Passport middleware
// app.use(passport.initialize());
//
// // Passport config
// require("./config/passport")(passport);
//
// // Routes
// app.use("/api/users", users);
//
//
// const port = process.env.PORT || 5000;      // process.envi.port is Heroku's port if you choose to deploy the app there
//
// app.listen(port, () => console.log("Server running on port " + port + "!"));
