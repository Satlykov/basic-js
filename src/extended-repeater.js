const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|'}) {
    console.log(options.separator);
    str = String(str);
    let addition = String(options.addition);
    let additionSeparator = String(options.additionSeparator);
    let separator = options.separator;
    let additionFullStr =  `${addition}${(additionSeparator + addition).repeat(options.additionRepeatTimes - 1)}`;
    let basicStr = `${str}${additionFullStr}`;
    return resultStr = `${basicStr}${(separator + basicStr).repeat(options.repeatTimes - 1)}`;
};
