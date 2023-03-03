const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainArr: [],

  getLength() {
    return chainMaker.chainArr.length;
  },
  addLink(value) {
    this.value = value;
    this.chainArr.push(String(this.value));
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position < this.chainArr.length && position > 0) {
      this.position = position;
      this.chainArr.splice((this.position - 1), 1);
      return this;
    } else {
      this.chainArr = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let str = '( ' + this.chainArr.join(' )~~( ') + ' )';
    this.chainArr = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
