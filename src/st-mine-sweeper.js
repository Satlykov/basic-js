import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
    let l = matrix[0].length;
    let arr = matrix.flat();

    let matFinal = matrix.map((el) => el.map((e) => (e = 0)));

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            if (i / l >= 1) {
                matFinal[Math.floor(i / l) - 1][(i % l) - 1]++;
                matFinal[Math.floor(i / l) - 1][i % l]++;
                matFinal[Math.floor(i / l) - 1][(i % l) + 1]++;
            }

            matFinal[Math.floor(i / l)][(i % l) - 1]++;
            matFinal[Math.floor(i / l)][(i % l) + 1]++;

            matFinal[Math.floor(i / l) + 1][(i % l) - 1]++;
            matFinal[Math.floor(i / l) + 1][i % l]++;
            matFinal[Math.floor(i / l) + 1][(i % l) + 1]++;
        }
    }

    return matFinal;
}
