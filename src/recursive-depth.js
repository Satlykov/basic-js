const CustomError = require("../extensions/custom-error");

const hasNestedArray = (arr) => arr.some(items => Array.isArray(items));
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if (hasNestedArray(arr)) {
      const newArr = arr.reduce((acc, cur) => acc.concat(cur), []);
      return depth + this.calculateDepth(newArr);
    }
    return depth;
  }
};