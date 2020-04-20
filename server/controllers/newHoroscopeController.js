var swisseph = require('swisseph');
var opencage = require('opencage-api-client');
var timeZoneSupport = require('timezone-support');


//Currently calculates ascendant with any American birthplace.  Still need to add timezone and DST functionality.  Only works for EDT right now.

const getInfo = function(req, res, callback){
    var key = process.env.OpenCage_Key || require('../config/config.js').openCage.key;
    var latitude = 0;
    var longitude = 0;
    var tzName = "";
    var birthAddress = req.body.location.city + ", " + req.body.location.state + ", " + req.body.location.zip + ", United States";
    opencage.geocode({q: birthAddress, key: key, limit: 1}).then(data => { //Uses opencage to get latitude and longitude for a city.
        if(data.status.code === 200){
            latitude = data.results[0].geometry.lat;
            longitude = data.results[0].geometry.lng;
            tzName = data.results[0].annotations.timezone.name;
            var date = {year: parseInt(req.body.DOB.year), month: parseInt(req.body.DOB.month), day: parseInt(req.body.DOB.day), hour: parseInt(req.body.time.hour)};
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
                //The following lines calculate which house was found.
                if(0 <= +houses.ascendant && +houses.ascendant < 30){
                    console.log('User is Aries');
                    callback('Aries');
                }
                else if(30 <= +houses.ascendant && +houses.ascendant < 60){
                    console.log('User is Taurus');
                    callback('Taurus');
                }
                else if(60 <= +houses.ascendant && +houses.ascendant  < 90){
                    console.log('User is Gemini');
                    callback('Gemini');
                }
                else if(90 <= +houses.ascendant && +houses.ascendant  < 120){
                    console.log('User is Cancer');
                    callback('Cancer');
                }
                else if(120 <= +houses.ascendant && +houses.ascendant  < 150){
                    console.log('User is Leo');
                    callback('Leo');
                }
                else if(150 <= +houses.ascendant && +houses.ascendant  < 180){
                    console.log('User is Virgo');
                    callback('Virgo');
                }
                else if(180 <= +houses.ascendant && +houses.ascendant  < 210){
                    console.log('User is Libra');
                    callback('Libra');
                }
                else if(210 <= +houses.ascendant && +houses.ascendant  < 240){
                    console.log('User is Scorpio');
                    callback('Scorpio');
                }
                else if(240 <= +houses.ascendant && +houses.ascendant  < 270){
                    console.log('User is Sagittarius');
                    callback('Sagittarius');
                }
                else if(270 <= +houses.ascendant && +houses.ascendant  < 300){
                    console.log('User is Capricorn');
                    callback('Capricorn');
                }
                else if(300 <= +houses.ascendant && +houses.ascendant  < 330){
                    console.log('User is Aquarius');
                    callback('Aquarius');
                }
                else if(330 <= +houses.ascendant && +houses.ascendant  < 360){
                    console.log('User is Pisces');
                    callback('Pisces');
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
};

module.exports = getInfo;