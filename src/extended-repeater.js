const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    str = String(str);
    let addition = String(options.addition);
    if (options.addition === undefined) {addition = ''};
    let additionSeparator = String(options.additionSeparator);
    if (options.additionSeparator == undefined) {additionSeparator = '|'};
    let separator = options.separator;
    if (options.separator == undefined) {separator = '+'};
    let additionFullStr =  `${addition}${(additionSeparator + addition).repeat(options.additionRepeatTimes - 1)}`;
    let basicStr = `${str}${additionFullStr}`;
    return resultStr = `${basicStr}${(separator + basicStr).repeat(options.repeatTimes - 1)}`;
};
