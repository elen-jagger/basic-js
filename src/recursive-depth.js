const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  max = -1;

  calculateDepth(data, count = 0) {
    if (!Array.isArray(data)) {
      this.max = Math.max(this.max, count);
      return this.max;
    } else {
      if (data.length === 0) {
        this.max = Math.max(this.max, count + 1);
        return this.max;
      } else {
        for (let el of data) {
          this.max = Math.max(this.max, this.calculateDepth(el, count + 1));        
        }
      }
    }

    const result = this.max;
    this.max = -1;;
    return result;
  }
}

module.exports = {
  DepthCalculator
};
