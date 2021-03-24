const CustomError = require("../extensions/custom-error");


module.exports = function createDreamTeam(arr) {
 let newArr = [];
 const regex = new RegExp(/[A-Za-z]/);
 if (Array.isArray(arr) === true) {
 for (let i = 0; i < arr.length; i++ ) {
     if (typeof arr[i] === 'string') {
        newArr.push(regex.exec(arr[i].toUpperCase()));
     }
 };
};
 return newArr.sort().join('').toUpperCase();
};
