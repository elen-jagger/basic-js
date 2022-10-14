/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(flag) {
    this.isReverse = flag !== undefined ? !flag: false;
  }

  decrypt(phrase, key) {
    if (phrase === undefined || key === undefined) { throw new Error('Incorrect arguments!'); }

    const data = this._prepare(phrase, key);
    const decryptedPhrase = [];
    const phraseLength = data.praseIndex.length;

    if (!this.isReverse) {
      for (let i = 0; i < phraseLength; i++) {
        const isNumber = typeof data.praseIndex[i] === 'number';
        let added = data.praseIndex[i];

        if (isNumber) {
          const index = (26 + data.praseIndex[i] - data.keyIndex[i]) % 26;
          added = this.alphabet[index];
        }      
  
        decryptedPhrase.push(added);
      }
    } else {
      for (let i = phraseLength - 1; i >= 0; i--) {
        const isNumber = typeof data.praseIndex[i] === 'number';
        let added = data.praseIndex[i];

        if (isNumber) {
          const index = (26 + data.praseIndex[i] - data.keyIndex[i]) % 26;
          added = this.alphabet[index];
        }      
  
        decryptedPhrase.push(added);
      }
    }
    
    return decryptedPhrase.join('');
  }
  
  encrypt(phrase, key) {
    if (phrase === undefined || key === undefined) { throw new Error('Incorrect arguments!'); }

    const data = this._prepare(phrase, key);
    const decryptedPhrase = [];
    const phraseLength = data.praseIndex.length;

    if (!this.isReverse) {
      for (let i = 0; i < phraseLength; i++) {
        const isNumber = typeof data.praseIndex[i] === 'number';
        const added = isNumber ? this.alphabet[(data.praseIndex[i] + data.keyIndex[i]) % 26] : data.praseIndex[i];
  
        decryptedPhrase.push(added);
      }
    } else {
      for (let i = phraseLength - 1; i >= 0; i--) {
        const isNumber = typeof data.praseIndex[i] === 'number';
        const added = isNumber ? this.alphabet[(data.praseIndex[i] + data.keyIndex[i]) % 26] : data.praseIndex[i];
  
        decryptedPhrase.push(added);
      }
    }
    
    return decryptedPhrase.join('');
  }

  _prepare(phrase, key) {
    const praseArr = (phrase ?? '').toUpperCase().split('');
    const keyArr = (key ?? '').toUpperCase().split('');
    const phraseIndexArr = [];
    const keyIndexArr = [];

    const phraseLength = praseArr.length;
    const keLength = keyArr.length;
    let k = 0;

    for (let i = 0; i < phraseLength; i++) {
      const element = praseArr[i];
      const index = this.alphabet.indexOf(element);
      let addedP;
      let addedK;

      if (index >= 0) {
        addedP = index;
        addedK = this.alphabet.indexOf(keyArr[k]);
        k++;
      } else {
        addedP = element;
        addedK = element;
      }

      phraseIndexArr.push(addedP);
      keyIndexArr.push(addedK);

      if (k === keLength) {
        k = 0;
      }
    }
    
    return { praseIndex: phraseIndexArr, keyIndex: keyIndexArr };
  }
}

module.exports = {
  VigenereCipheringMachine
};
