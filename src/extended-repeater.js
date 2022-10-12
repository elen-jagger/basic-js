const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
let strSep = (!options.separator)? '+': options.separator;
let addRep = (!options.additionSeparator)? '|': options.additionSeparator;


  function createRepeat(str, sep, rep) {
    let initStr = String(str);
    let repTimes = (!rep) ? 0 : rep;

    let newStr = '';
    let strPlusSep = initStr + sep;
    for(let i = 1; i < repTimes; i++) {
      newStr += strPlusSep;
    }
    newStr += initStr;
    return newStr;
  }
  
  if(typeof options.addition != 'undefined') {
    let addStr = String(str) + createRepeat(options.addition, addRep, options.additionRepeatTimes);
    let resultStr = createRepeat(addStr, strSep, options.repeatTimes);
    return resultStr;
  }else{
    let resultStr = createRepeat(str, strSep, options.repeatTimes);
    return resultStr;
  }  
}

module.exports = {
  repeater
};
