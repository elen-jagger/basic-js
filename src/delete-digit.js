const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let strArr = String(n).split('');
  let numsArr = [];
  let nums = [];
  
  for( i = 0; i < strArr.length; i++ ) {
    let tempArr = strArr.slice();
    tempArr.splice(i, 1);
    numsArr.push(tempArr.join(''));
  }

  numsArr.forEach((el) => nums.push(Number(el)));
  return Math.max( ...nums );
}

module.exports = {
  deleteDigit
};
