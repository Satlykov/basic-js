import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let arr =  matrix.flat()
  let l = matrix[0].length
  let newArr = [0]
  for (let i = 0; i < arr.length; i++) {
    if(arr[i - l] !== 0) newArr.push(arr[i])
  }
  
  return newArr.reduce((sum, current) => sum + current, 0);
}
