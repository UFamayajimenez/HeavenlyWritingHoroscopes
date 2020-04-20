const swisseph = require('swisseph'),
    tzSupport = require('timezone-support'),
    SunCalc = require('suncalc');

const currMoonSign = () => {
    swisseph.swe_julday(2020, 4, 19, 19, swisseph.SE_GREG_CAL, (julday) => {
        swisseph.swe_calc_ut(julday, swisseph.SE_MOON, 0, (body) => {
            console.log(body);
        })
    });
};

const currMoon = () => {
    const result = SunCalc.getMoonPosition(new Date(), 0, 0);
    const pi = Math.PI;
    const degrees = result.altitude * (180/pi);
    console.log(degrees);
    console.log(360 + degrees);

    swisseph.swe_julday(2020, 4, 20, 12, swisseph.SE_GREG_CAL, (julday) => {
        swisseph.swe_houses(julday, 0, 0, 'W', (houses) => {
            console.log(houses);
        })
    })
};

currMoonSign();