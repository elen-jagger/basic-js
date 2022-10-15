const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let numsArr = [];
  let indexesArr = [];

  for( let i = 0; i < arr.length; i++ ) {
    if( arr[i] != -1 ) { numsArr.push(arr[i]); }
  }
  numsArr.sort( (a, b) => a - b );

  let position = 0;
  while( true ) {
    let foundPosition = arr.indexOf(-1, position);
    if( foundPosition === -1 ) { break }
    indexesArr.push(foundPosition);
    position = foundPosition + 1;
  }

  indexesArr.forEach(element => {
    numsArr.splice(element, 0, -1);
  });

  return numsArr;
}

module.exports = {
  sortByHeight
};
