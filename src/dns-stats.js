const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
  let allDNS = [];

  domains.forEach((el) => {
    let splited = el.split('.').reverse();
    let DNSstr = '';
    splited.forEach((el) => {
      DNSstr += `.${el}`;
      allDNS.push(DNSstr);
    })
  })

  let result = {};
  allDNS.forEach((el) => {
    if (result.hasOwnProperty(el)) {
      result[el] += 1;
    } else {
      result[el] = 1;
    }
  })

  return domains.length === 0 ? {} : result;
}

module.exports = {
  getDNSStats
};
