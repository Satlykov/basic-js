const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === '^^') {
        counter += 1;
      }
    }
  }
  return counter;
};
