var UserSchema = require('../models/UserSchema.js');
var swisseph = require('swisseph');


// theholmesoffice.com/mongoose-and-node-js-tutorial/

const getInfo = function(req, res){
    var userName = 'Josh ';
    UserSchema.findOne({email: "koki@aol.com"}).then(user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        //currently julday doesn't give correct info
        const date = {year: parseInt(user.DOB.year), month: parseInt(user.DOB.month), day: parseInt(user.DOB.day), hour: parseInt(user.time.hour) + 5};
        var julday = swisseph.swe_julday(date.year, date.month, date.day, date.hour, swisseph.SE_GREG_CAL);
        console.log(julday);
        swisseph.swe_houses(julday, 29.65, -82.33, 'W', function(houses){
            console.log('Houses ', houses);
            console.log('ascendant: ', houses.ascendant);
            if(0 <= +houses.ascendant & +houses.ascendant < 30){
                user.overwrite({natalSign: 'Aries'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else if(30 <= +houses.ascendant & +houses.ascendant < 60){
                user.overwrite({natalSign: 'Taurus'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else if(60 <= +houses.ascendant & +houses.ascendant  < 90){
                user.overwrite({natalSign: 'Gemini'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else if(90 <= +houses.ascendant & +houses.ascendant  < 120){
                user.overwrite({natalSign: 'Cancer'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else if(120 <= +houses.ascendant & +houses.ascendant  < 150){
                user.overwrite({natalSign: 'Leo'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else if(150 <= +houses.ascendant & +houses.ascendant  < 180){
                user.overwrite({natalSign: 'Virgo'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else if(180 <= +houses.ascendant & +houses.ascendant  < 210){
                user.overwrite({natalSign: 'Libra'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else if(210 <= +houses.ascendant & +houses.ascendant  < 240){
                user.overwrite({natalSign: 'Scorpio'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else if(240 <= +houses.ascendant & +houses.ascendant  < 270){
                user.overwrite({natalSign: 'Sagittarius'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else if(270 <= +houses.ascendant & +houses.ascendant  < 300){
                user.overwrite({natalSign: 'Capricorn'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else if(300 <= +houses.ascendant & +houses.ascendant  < 330){
                user.overwrite({natalSign: 'Aquarius'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else if(330 <= +houses.ascendant & +houses.ascendant  < 360){
                user.overwrite({natalSign: 'Pisces'}).save(() => {
                    console.log("user is ", user.natalSign);
                });
            }
            else{
                console.log("Err");
            }
        });
        res.send("success");

    // UserSchema.info(userName, function(err, info) {
    //     if(!err){
    //         //currently assuming that month is in numbers and not letters.
    //         //currently doesn't account for dst (i think. not sure)
    //         //results might be inconsistent if we don't set swisseph.swe_set_ephe_path(NULL)
    //         //swisseph.swe_set_topo(-122, 45, 0);
    //         //var flag = swisseph.SEFLG_TOPOCTR | swisseph.SEFLG_MOSEPH 
    //         const date = {year: parseInt(info.DOB.year), month: parseInt(info.DOB.month), day: parseInt(info.DOB.day), hour: parseInt(info.time.hour)};
    //         var julday = swisseph.swe_julday(date.year, date.month, date.day, date.hour, swisseph.SE_GREG_CAL);
    //         console.log(julday);
    //         // swisseph.swe_calc_ut (julday, swisseph.SE_SUN, flag, function (body) {
    //         //     console.log ('Sun position:', body);
    //         // });
    //         //The client refers users to a website that uses the Placidus house calculation method.
    //         swisseph.swe_houses(julday, 45, -122, 'W', function(houses){
    //             console.log('Houses ', houses);
    //         });
    //         res.send("success");
    //     }
    //     else{
    //         console.log("Error 9");
    //         res.send("Not successful!");
    //     }
    });
};

module.exports = getInfo;