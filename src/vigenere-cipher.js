const CustomError = require("../extensions/custom-error");

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const rectangle = [
  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  ['B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A'],
  ['C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B'],
  ['D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C'],
  ['E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D'],
  ['F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E'],
  ['G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F'],
  ['H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G'],
  ['I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H'],
  ['J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I'],
  ['K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J'],
  ['L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K'],
  ['M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L'],
  ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'],
  ['O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N'],
  ['P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'],
  ['Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'],
  ['R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'],
  ['S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R'],
  ['T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S'],
  ['U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'],
  ['V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U'],
  ['W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'],
  ['X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W'],
  ['Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X'],
  ['Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'],
];

const START_POSITION_CHARCODE = 65;

class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this._reverseFlag = !isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Lack of arguments!');

    const messageUC = message.toUpperCase();
    const keyUC = key.toUpperCase();

    const messageUCTrim = messageUC.trim();
    const keyUCReplace = keyUC.replace(/\s/g, '');
    
    const messageLength = messageUCTrim.length;
    const keyLength = keyUCReplace.length;

    const res = [];

    for (let i = 0, n =0; i < messageLength; i += 1, n += 1) {
      const messageChar = messageUCTrim[i];
      if(!~alphabet.indexOf(messageChar)) {
        res.push(messageChar);
        n--;
        continue;
      }
      const  messageCharCode = messageChar.charCodeAt(0);

      const shiftedRowIndex = keyUCReplace.charCodeAt(n % keyLength) - START_POSITION_CHARCODE;
      const shiftedCharIndex = messageCharCode - START_POSITION_CHARCODE;
      res.push(rectangle[shiftedRowIndex][shiftedCharIndex]);
    }
    if (this._reverseFlag === true) return res.reverse().join('');
    return res.join('');
  }   

  decrypt(encryptMessage, key) {
    if (encryptMessage === undefined || key === undefined) throw new Error('Lack of arguments!');

    const encryptMessageUC = message.toUpperCase();
    const keyUC = key.toUpperCase();

    const encryptedMessageUCTrim = encryptMessageUC.trim();
    const keyUCReplace = keyUC.replace(/\s/g, '');
    
    const messageLength = messageUCTrim.length;
    const keyLength = encryptedMessageUCTrim.length;

    const res = [];

    for (let i = 0, n =0; i < messageLength; i++, n++) {
      let encryptedMessageChar = encryptedMessageUCTrim[i];

      const rowIndex = keyUCReplace.charCodeAt(n % keyLength) - START_POSITION_CHARCODE;

      const row = rectangle[rowIndex];

      if(!~alphabet.indexOf(encryptedMessageChar)) {
        res.push(encryptedMessageChar);
        n--;
        continue;
      }
      const targetIndex = row.indexOf(encryptedMessageChar);
      const unshiftedRow = rectangle[0];
      const trueChar = unshiftedRow[targetIndex];

      res.push(trueChar);
    }
    if (this._reverseFlag === true) return res.reverse().join('');
    return res.join('');
  }
}

module.exports = VigenereCipheringMachine;
