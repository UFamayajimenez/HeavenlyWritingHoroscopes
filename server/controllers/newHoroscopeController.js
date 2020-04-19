var UserSchema = require('../models/UserSchema.js');
var swisseph = require('swisseph');
var opencage = require('opencage-api-client');
var config = require('../config/config.js');
var timeZoneSupport = require('timezone-support');


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
                var date = {year: parseInt(user.DOB.year), month: parseInt(user.DOB.month), day: parseInt(user.DOB.day), hour: parseInt(user.time.hour)};
                var timeWas = new Date(date.year, date.month - 1, date.day);  //-1 because for some reason Date calculates months from 0.
                var tzObject = timeZoneSupport.findTimeZone(tzName);
                const tzOffset = timeZoneSupport.getUTCOffset(timeWas, tzObject);
                date.hour = date.hour + tzOffset.offset/60;
                if(date.hour > 23){ //Cases where day is different between time zones.
                    date.hour = date.hour % 24;
                    date.day = date.day + 1;
                }
                else if (date.hour < 0){
                    date.hour = date.hour + 24;
                    date.day = date.day - 1;
                }
                julday = swisseph.swe_julday(date.year, date.month, date.day, date.hour, swisseph.SE_GREG_CAL);  //Calculates the Julian Date in UCT
                swisseph.swe_houses(julday, parseInt(latitude), parseInt(longitude), 'W', function(houses){ //Calculates houses and ascendant with given date, lat, lng, and house system
                    // console.log(houses);
                    //The following lines calculate which house was found.
                    if(0 <= +houses.ascendant && +houses.ascendant < 30){
                        console.log('User is Aries');
                        callback('Aries');
                        // user.overwrite({natalSign: 'Aries'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(30 <= +houses.ascendant && +houses.ascendant < 60){
                        console.log('User is Taurus');
                        callback('Taurus');
                        // user.overwrite({natalSign: 'Taurus'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(60 <= +houses.ascendant && +houses.ascendant  < 90){
                        console.log('User is Gemini');
                        callback('Gemini');
                        // user.overwrite({natalSign: 'Gemini'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(90 <= +houses.ascendant && +houses.ascendant  < 120){
                        console.log('User is Cancer');
                        callback('Cancer');
                        // user.overwrite({natalSign: 'Cancer'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(120 <= +houses.ascendant && +houses.ascendant  < 150){
                        console.log('User is Leo');
                        callback('Leo');
                        // user.overwrite({natalSign: 'Leo'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(150 <= +houses.ascendant && +houses.ascendant  < 180){
                        console.log('User is Virgo');
                        callback('Virgo');
                        // user.overwrite({natalSign: 'Virgo'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(180 <= +houses.ascendant && +houses.ascendant  < 210){
                        console.log('User is Libra');
                        callback('Libra');
                        // user.overwrite({natalSign: 'Libra'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(210 <= +houses.ascendant && +houses.ascendant  < 240){
                        console.log('User is Scorpio');
                        callback('Scorpio');
                        // user.overwrite({natalSign: 'Scorpio'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(240 <= +houses.ascendant && +houses.ascendant  < 270){
                        console.log('User is Sagittarius');
                        callback('Sagittarius');
                        // user.overwrite({natalSign: 'Sagittarius'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(270 <= +houses.ascendant && +houses.ascendant  < 300){
                        console.log('User is Capricorn');
                        callback('Capricorn');
                        // user.overwrite({natalSign: 'Capricorn'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(300 <= +houses.ascendant && +houses.ascendant  < 330){
                        console.log('User is Aquarius');
                        callback('Aquarius');
                        // user.overwrite({natalSign: 'Aquarius'}).save(() => {
                        //     console.log("user is ", user.natalSign);
                        // });
                    }
                    else if(330 <= +houses.ascendant && +houses.ascendant  < 360){
                        console.log('User is Pisces');
                        callback('Pisces');
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
        // res.send("success");
    // });
};

module.exports = getInfo;