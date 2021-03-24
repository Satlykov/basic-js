const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr = []) {

  if (Array.isArray(arr) === 'false') throw new Error('Is not array');
  if (arr === []) throw new Error('Empty array');

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '--discard-prev' || arr[i] !== '--double-next' || arr[i] !== '--double-prev') {
      newArr.push(arr[i]);
    } else if (arr[i] == '--discard-prev') {
      newArr.pop();
    } else if (arr[i] == '--double-next') {
      newArr.push(arr[i + 1]);
    } else if (arr[i] == '--double-prev') {
      newArr.push(arr[i - 1]);
    } else {throw new Error('Not one of the options')}
  }

  for (let n = newArr.length; n > 0; n--) {
    if (newArr[i] == '--discard-next') {
      newArr.splice(i, 2);
    } 
  }



return newArr;
}
