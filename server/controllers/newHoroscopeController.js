var UserSchema = require('../models/UserSchema.js');
var swisseph = require('swisseph');


// theholmesoffice.com/mongoose-and-node-js-tutorial/

const getInfo = function(req, res){
    var userName = 'Josh ';
    UserSchema.info(userName, function(err, info) {
        if(!err){
            //currently assuming that month is in numbers and not letters.
            //currently doesn't account for dst (i think. not sure)
            //results might be inconsistent if we don't set swisseph.swe_set_ephe_path(NULL)
            //swisseph.swe_set_topo(-122, 45, 0);
            //var flag = swisseph.SEFLG_TOPOCTR | swisseph.SEFLG_MOSEPH 
            const date = {year: parseInt(info.DOB.year), month: parseInt(info.DOB.month), day: parseInt(info.DOB.day), hour: parseInt(info.time.hour)};
            var julday = swisseph.swe_julday(date.year, date.month, date.day, date.hour, swisseph.SE_GREG_CAL);
            console.log(julday);
            // swisseph.swe_calc_ut (julday, swisseph.SE_SUN, flag, function (body) {
            //     console.log ('Sun position:', body);
            // });
            //The client refers users to a website that uses the Placidus house calculation method.
            swisseph.swe_houses(julday, 45, -122, 'W', function(houses){
                console.log('Houses ', houses);
            });
            res.send("success");
        }
        else{
            console.log("Error 9");
            res.send("Not successful!");
        }
    });


}

module.exports = getInfo;