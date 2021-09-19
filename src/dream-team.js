import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let firstLetters = [];

  if (!Array.isArray(members)) {
    return false; 
  } else {
    for (let i = 0; i < members.length; i++ ) {
      if (typeof members[i] == 'string') {
        let trimed = members[i].trim();
        firstLetters.push(trimed[0]);
      }
    }
  }

  firstLetters.sort(function(a,b){
    return a.localeCompare(b);
  });
  let teamName = firstLetters.join('');
  return teamName.toUpperCase();
}
