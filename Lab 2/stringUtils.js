/* Todo: Implment the functions below and then export them
      using ES6 syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

export const camelCase = (str) => {
      if(str == null || str === 'undefined') throw 'Error: Input String is Empty';
      if (typeof str !== 'string') throw 'Error: Input type is not a String.';
      if (!str.trim().length > 0) throw 'Error: Input String is Empty';
      let trimStr = str.trim().toLowerCase().split(/\s+/);
      let result = trimStr.map((word, index) => index != 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word).join('');
      return result;
};

export const replaceCharsAtIndexes = (str, idxArr) => {
      if(str == null || str === 'undefined') throw 'Error: Input String is Empty';
      if (typeof str !== 'string') throw 'Error: Input type is not a String.';
      if (!str.length > 0) throw 'Error: Input String is Empty';
      if (!Array.isArray(idxArr)) throw "Error: idxArr is not an array";
      if (idxArr.length < 1) throw "Error: idxArr Array is Empty.";
      if (!idxArr.every(item => typeof item === "number")) throw "Error: Array elements must be numbers";
      if (!(idxArr.every(idx => idx > 0 && idx < str.length - 1))) throw "Error: Indexes must be between the range of greater than 0 and less than or equal to the length of the string minus 2.";
      let findAllIndices = (str, char) => {
            const indices = [];
            let index = str.indexOf(char);
            while (index !== -1) {
                  indices.push(index);
                  index = str.indexOf(char, index + 1);
            }
            return indices;
      };
      idxArr.forEach(idx => {
            let CharIdxs = findAllIndices(str, str[idx]);
            CharIdxs = CharIdxs.slice(CharIdxs.indexOf(idx) + 1);
            let stringArray = str.split('');
            CharIdxs.forEach((element, index) => {
                  if ((index + 1) % 2 != 0) {
                        stringArray[element] = stringArray[idx - 1];
                  }
                  else if ((index + 1) % 2 == 0) {
                        stringArray[element] = stringArray[idx + 1];
                  }
            });
            str = stringArray.join('');
      });
      return str;
};

export const compressString = (str) => {
      if(str == null || str === 'undefined') throw 'Error: Input String is Empty';
      if (typeof str !== 'string') throw 'Error: Input type is not a String.';
      if (!str.trim().length > 0) throw 'Error: Input String is Empty';
      let trimStr = str.trim();
      let result = trimStr[0];
      let count = 1;
      for (let index = 1; index < trimStr.length; index++) {
            if (result[result.length - 1] == trimStr[index]) {
                  count++;
            }
            else {
                  result = count > 1 ? result + count.toString() + trimStr[index] : result + trimStr[index];
                  count = 1;
            }
      }
      result = count > 1 ? result + count.toString() : result;
      return result;
};
