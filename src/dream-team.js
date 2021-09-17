import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
    let newArr = [];
    const regex = new RegExp(/[A-Za-z]/);
    if (Array.isArray(arr) === true) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "string") {
                newArr.push(regex.exec(arr[i].toUpperCase()));
            }
        }
    }
    return newArr.sort().join("").toUpperCase();
}
