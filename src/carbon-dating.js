const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity = 'no date') {

  let sampleActivityNumber = parseFloat(sampleActivity);

  if (sampleActivity === 'no date' || typeof sampleActivity !== 'string' ||  
      sampleActivityNumber > 15 || sampleActivityNumber <= 0 || isFinite(sampleActivityNumber) === false) {
    return false;
  } 

  return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivityNumber))/(0.693/HALF_LIFE_PERIOD));
};
