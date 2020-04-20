//Today's date
let d = new Date();
let utc = new Date(d.getUTCFullYear() + '/' + (d.getUTCMonth() + 1) + '/' + d.getUTCDate() + ' ' + d.getUTCHours() + ':' + d.getUTCMinutes() + ':' + d.getUTCSeconds())

//Calibration date
let cal = new Date('1921/01/23 ' + (utc.getHours() - 1) + ':' + utc.getMinutes() + ':' + utc.getSeconds());

let fraction = utc.getHours() + utc.getMinutes() / 60.0 + utc.getSeconds() / 3600.0;
fraction = fraction / 24.0;

//Difference between calibration time and todays time in universal time zone
let diff = Math.abs(utc - cal) / (1000 * 3600 * 24);
diff = Math.trunc(diff) + fraction;

//Ephemeris calculation
let eph = 13.1762 * diff + 12.0947 * Math.cos(0.11403 * diff) * Math.sin(0.11403 * (diff + 1)) - 6.627;
eph = (eph / 360.0) - Math.trunc(eph / 360.0);

//Calculate ephemeris table value
let signNum= eph * 360;

//According to ephermeris table value, assign moon sign
let moonSignName;
if (signNum >= 0 && signNum < 30){
    moonSignName = "Leo";
} else if (signNum >= 30 && signNum < 60){
    moonSignName = "Virgo";
} else if (signNum >= 60 && signNum < 90){
    moonSignName = "Libra";
} else if (signNum >= 90 && signNum < 120){
    moonSignName = "Scorpio";
} else if (signNum >= 120 && signNum < 150){
    moonSignName = "Sagittarius";
} else if (signNum >= 150 && signNum < 180){
    moonSignName = "Capricorn";
} else if (signNum >= 180 && signNum < 210){
    moonSignName = "Aquarius";
} else if (signNum >= 210 && signNum < 240){
    moonSignName = "Pisces";
} else if (signNum >= 240 && signNum < 270){
    moonSignNameName = "Aries";
} else if (signNum >= 270 && signNum < 300){
    moonSignName = "Taurus";
} else if (signNum >= 300 && signNum < 330){
    moonSignName = "Gemini";
} else if (signNum >= 330 && signNum < 360){
    moonSignName = "Cancer";
} else {
    moonSignName = "Invalid Sign";
}

const moonSign = {
    sign: moonSignName,
    value: signNum
};

console.log(moonSign.sign);

module.exports = moonSign;
