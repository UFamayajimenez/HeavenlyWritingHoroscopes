const swisseph = require('swisseph'),
    tzSupport = require('timezone-support'),
    SunCalc = require('suncalc');

const currMoonSign = () => {
    swisseph.swe_julday(2020, 4, 19, 19, swisseph.SE_GREG_CAL, (julday) => {
        swisseph.swe_calc_ut(julday, swisseph.SE_MOON, swisseph.SEFLG_SPEED, (body) => {
            console.log(body);
            swisseph.swe_houses(julday, body.latitude, body.longitude, 'W', (houses) => {
                console.log(houses);
            })
        });
    });
};

const currMoon = () => {
    const result = SunCalc.getMoonPosition(new Date(), 29.651980, -82.325020);
    const pi = Math.PI;
    const degrees = result.azimuth * (180/pi);
    console.log(degrees);

    swisseph.swe_julday(2020, 4, 19, 20, swisseph.SE_GREG_CAL, (julday) => {
        swisseph.swe_houses(julday, 29.651980, -82.325020, 'W', (houses) => {
            console.log(houses);
        })
    })
};

currMoon();