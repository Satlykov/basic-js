const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    str = String(str);
    addition = String(addition);
    let additionFullStr =  `${addition}${(additionSeparator + addition).repeat(additionRepeatTimes - 1)}`;
    let basicStr = `${str}${additionFullStr}`;
    return resultStr = `${basicStr}${(separator + basicStr).repeat(repeatTimes - 1)}`
};
