import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(arr) {
    let newArr = arr.map((el) => el.split("."));
    let dnsArr = [];
    let obj = {};

    for (let i = 0; i < newArr.length; i++) {
        let str = "";
        for (let n = newArr[i].length - 1; n >= 0; n--) {
            str = `${str}.${newArr[i][n]}`;
            dnsArr.push(str);
        }
    }

    dnsArr.forEach(function (x) {obj[x] = (obj[x] || 0) + 1;});

    return obj;
}
