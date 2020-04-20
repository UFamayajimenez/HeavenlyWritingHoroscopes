var SunCalc = require('suncalc');

let moonIllum = SunCalc.getMoonIllumination(new Date());

//Calculate the name of moon phase value
let moonPhase;
if (moonIllum. phase === 0){
    moonPhase = "New Moon";
} else if (moonIllum.phase > 0 && moonIllum.phase < 0.25){
    moonPhase = "Waxing Crescent";
} else if (moonIllum.phase === 0.25){
    moonPhase = "First Quarter";
} else if (moonIllum.phase > 0.25 && moonIllum.phase < 0.5){
    moonPhase = "Waxing Gibbous";
} else if (moonIllum.phase === 0.5){
    moonPhase = "Full Moon";
} else if (moonIllum.phase > 0.5 && moonIllum.phase < 0.75){
    moonPhase = "Waning Gibbous";
} else if (moonIllum.phase === 0.75){
    moonPhase = "Last Quarter";
} else if (moonIllum.phase > 0.75 && moonIllum.phase < 1.0){
    moonPhase = "Waning Crescent";
} else if (moonIllum.phase === 1.0){
    moonPhase = "New Moon";
} else {
    moonPhase = "Invalid Moon Phase";
}

const moonStats = {
    phase: moonPhase,
    illumFraction: moonIllum.fraction,
    phaseNum: moonIllum.phase,
    angle: moonIllum.angle
};

module.exports = moonStats;