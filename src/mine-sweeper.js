const { NotImplementedError } = require('../extensions/index.js');

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
 function minesweeper(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      row.push(0);
    }
    result.push(row);
      console.log(result);
  }
    console.log(result);

  for (let a = 0; a < matrix.length; a++) {
    for (let b = 0; b < matrix[a].length; b++) {
      if (matrix[a][b] === true) {

        if (a === 0) {
          if (b === 0) {
            result[a][b + 1] += 1;
            result[a + 1][b] += 1;
            result[a + 1][b + 1] += 1;
          }
          else if (b === matrix[a].length - 1) {
            result[a][b - 1] += 1;
            result[a + 1][b - 1] += 1;
            result[a + 1][b] += 1;
          }
          else {
            result[a][b - 1] += 1;
            result[a][b + 1] += 1;
            result[a + 1][b - 1] += 1;
            result[a + 1][b] += 1;
            result[a + 1][b + 1] += 1;
          }
        }

        else if (a === matrix.length - 1) {
            if (b === 0) {
            result[a][b + 1] += 1;
            result[a - 1][b] += 1;
            result[a - 1][b + 1] += 1;
          }
          else if (b === matrix[a].length - 1) {
            result[a][b - 1] += 1;
            result[a - 1][b - 1] += 1;
            result[a - 1][b] += 1;
          }
          else {
            result[a][b - 1] += 1;
            result[a][b + 1] += 1;
            result[a - 1][b - 1] += 1;
            result[a - 1][b] += 1;
            result[a - 1][b + 1] += 1;
          }

        }

        else {
             if (b === 0) {
              result[a][b + 1] += 1;
              result[a + 1][b] += 1;
              result[a + 1][b + 1] += 1;
              result[a - 1][b] += 1;
              result[a - 1][b + 1] += 1;
            }
          else if (b === matrix[a].length - 1) {
            result[a][b - 1] += 1;
            result[a + 1][b - 1] += 1;
            result[a + 1][b] += 1;
            result[a - 1][b - 1] += 1;
            result[a - 1][b] += 1;
          }
          else {
            result[a][b - 1] += 1;
            result[a][b + 1] += 1;
            result[a + 1][b - 1] += 1;
            result[a + 1][b] += 1;
            result[a + 1][b + 1] += 1;
            result[a - 1][b - 1] += 1;
            result[a - 1][b] += 1;
            result[a - 1][b + 1] += 1;
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
