import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  currChain: [],
  getLength() {
    return this.currChain.length;
  },
  addLink(content) {
    this.currChain.push(`( ${content} )`);
    return this;
  },
  removeLink(position) {
    if (this._checkIntegerNumber(position)) {
      if (position < 1 || position > this.getLength()) {
        this._deleteChain();
        throw new Error('You can\'t remove incorrect link!');
      }
      const index = position - 1;
      this.currChain.splice(index, 1);
      return this;
    }
    this._deleteChain();
    throw new Error('You can\'t remove incorrect link!');
  },
  reverseChain() {
    this.currChain.reverse();
    return this;
  },
  finishChain() {
    const chain = this._getChain();
    this._deleteChain();
    return chain;
  },
  _deleteChain() {
    this.currChain.length = 0;
  },
  _checkIntegerNumber(num) {
    return typeof num === 'number' && (num ^ 0) === num;
  },
  _getChain() {
    return this.currChain.join('~~');
  }
};
