var UserSchema = require('../models/UserSchema.js');
var swisseph = require('swisseph');
var opencage = require('opencage-api-client');
var config = require('../config/config.js');


//Currently calculates ascendant with any American birthplace.  Still need to add timezone and DST functionality.  Only works for EDT right now.

const getInfo = function(req, res, callback){
    // UserSchema.findOne({email: "koki@aol.com"}).then(user => {
        var latitude = 0;
        var longitude = 0;
        var tzName = "";
        var birthAddress = req.body.location.city + ", " + req.body.location.state + ", " + req.body.location.zip + ", United States";
        opencage.geocode({q: birthAddress, key: config.openCage.key, limit: 1}).then(data => { //Uses opencage to get latitude and longitude for a city.
            if(data.status.code === 200){
                latitude = data.results[0].geometry.lat;
                longitude = data.results[0].geometry.lng;
                tzName = data.results[0].annotations.timezone.name;
                const date = {year: parseInt(req.body.DOB.year), month: parseInt(req.body.DOB.month), day: parseInt(req.body.DOB.day), hour: parseInt(req.body.time.hour) + 4};
                julday = swisseph.swe_julday(date.year, date.month, date.day, date.hour, swisseph.SE_GREG_CAL);  //Calculates the Julian Date in UCT
                swisseph.swe_houses(julday, parseInt(latitude), parseInt(longitude), 'W', function(houses){ //Calculates houses and ascendant with given date, lat, lng, and house system
                    console.log(houses);
                    //The following lines calculate which house was found.
                    if(0 <= +houses.ascendant && +houses.ascendant < 30){
                        console.log('User is Aries');
                        return 'Aries';
                        // user.overwrite({natalSign: 'Aries'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(30 <= +houses.ascendant && +houses.ascendant < 60){
                        console.log('User is Taurus');
                        return 'Taurus'
                        // user.overwrite({natalSign: 'Taurus'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(60 <= +houses.ascendant && +houses.ascendant  < 90){
                        console.log('User is Gemini');
                        return 'Gemini';
                        // user.overwrite({natalSign: 'Gemini'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(90 <= +houses.ascendant && +houses.ascendant  < 120){
                        console.log('User is Cancer');
                        return 'Cancer';
                        // user.overwrite({natalSign: 'Cancer'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(120 <= +houses.ascendant && +houses.ascendant  < 150){
                        console.log('User is Leo');
                        return 'Leo';
                        // user.overwrite({natalSign: 'Leo'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(150 <= +houses.ascendant && +houses.ascendant  < 180){
                        console.log('User is Virgo');
                        return 'Virgo';
                        // user.overwrite({natalSign: 'Virgo'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(180 <= +houses.ascendant && +houses.ascendant  < 210){
                        console.log('User is Libra');
                        return 'Libra';
                        // user.overwrite({natalSign: 'Libra'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(210 <= +houses.ascendant && +houses.ascendant  < 240){
                        console.log('User is Scorpio');
                        return 'Scorpio';
                        // user.overwrite({natalSign: 'Scorpio'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(240 <= +houses.ascendant && +houses.ascendant  < 270){
                        console.log('User is Sagittarius');
                        return 'Sagittarius';
                        // user.overwrite({natalSign: 'Sagittarius'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(270 <= +houses.ascendant && +houses.ascendant  < 300){
                        console.log('User is Capricorn');
                        return 'Capricorn';
                        // user.overwrite({natalSign: 'Capricorn'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(300 <= +houses.ascendant && +houses.ascendant  < 330){
                        console.log('User is Aquarius');
                        return 'Aquarius'
                        // user.overwrite({natalSign: 'Aquarius'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(330 <= +houses.ascendant && +houses.ascendant  < 360){
                        console.log('User is Pisces');
                        return 'Pisces';
                        // user.overwrite({natalSign: 'Pisces'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else{
                        console.log("Err");
                    }
                })
            }
            else{
                console.log('error', data.status.message);
            }
        }).catch(error => {
            console.log('error', error.message);
        });
        res.send("success");
    // });
};

module.exports = getInfo;