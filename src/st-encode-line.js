import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = str.split('')
  let arrFin = []
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1] && arr2.length == 0) arrFin.push(arr[i])
    if (arr[i] != arr[i + 1] && arr2.length != 0) {
      arrFin.push(`${arr2.length + 1}${arr[i]}`)
      arr2 = []
    }
    if (arr[i] == arr[i + 1]) arr2.push(arr[i])
  }
  return arrFin.join('')
}
