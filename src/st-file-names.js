import { NotImplementedError } from "../extensions/index.js";

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(arr) {
    if (arr == []) return [];
    let newArr = [];
    let set = new Set(arr);
    let obj = {};

    for (let num of set) {
        obj[num] = 0;
    }

    arr.map((el) => {
        if (obj[el] == 0) {
            obj[el]++;
            if (newArr.indexOf(el) == -1) {
                newArr.push(`${el}`);
            } else {
                newArr.push(`${el}(${obj[el]})`);
            }
        } else if (obj[el] > 0) {
            newArr.push(`${el}(${obj[el]})`);
            obj[el]++;
        }
    });
  return newArr;
}
