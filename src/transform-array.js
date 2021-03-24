const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr = []) {
  if (Array.isArray(arr) == "false") throw new Error("Is not array");

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-prev":
        if (newArr.length !== 0) {
          newArr.pop();
        }
        break;

      case "--discard-next":
        if (i < newArr.length) {
          i++;
        }
        break;

      case "--double-next":
        if (i < newArr.length) {
          newArr.push(arr[i + 1]);
        }
        break;

      case "--double-prev":
        if (arr[i - 2] == "--discard-next") {
          newArr.pop();
        } else if (newArr.length !== 0) {
          newArr.push(arr[i - 1]);
        }
        break;

      default:
        newArr.push(arr[i]);
        break;
    }
  }

  return newArr;
};
