/* Todo: Implment the functions below and then export them
      using ES6 syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/

export const deepEquality = (obj1, obj2) => {
      if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null || Array.isArray(obj1) || Array.isArray(obj2)) throw "Error: Input must be a non-null object";
      let obj1Keys = Object.keys(obj1).sort();
      let obj2Keys = Object.keys(obj2).sort();
      if (obj1Keys.length != obj2Keys.length) return false;
      if (JSON.stringify(obj1Keys) !== JSON.stringify(obj2Keys)) return false;
      for (let key of obj1Keys) {
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                  if (!deepEquality(obj1[key], obj2[key])) return false;
            } else if (typeof obj1[key] != typeof obj2[key] || obj1[key] !== obj2[key]) {
                  return false;
            }
      }
      return true
};

export const commonKeysValues = (obj1, obj2) => {
      if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null || Array.isArray(obj1) || Array.isArray(obj2)) throw "Error: Input must be a non-null object";
      let obj1Keys = Object.keys(obj1).sort();
      let obj2Keys = Object.keys(obj2).sort();
      let commonkeys = obj1Keys.filter(key => obj2Keys.includes(key));
      let result = {};
      for (let key of commonkeys) {
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                  result[key] = {}
                  result[key] = commonKeysValues(obj1[key], obj2[key]);
                  if (Object.keys(result[key]).length === 0) delete result[key];
                  else if(deepEquality(obj1[key],result[key])){
                        result = {...result,...result[key]}
                  }
                  else {
                        result = result[key];
                  }
            } else if (typeof obj1[key] === typeof obj2[key] && obj1[key] === obj2[key]) {
                  result[key] = obj1[key];
            }
      }
      return result;
};

export const calculateObject = (inputObject, func) => {
      if (typeof inputObject !== 'object' || inputObject === null || Array.isArray(inputObject) || Object.keys(inputObject).length === 0) throw "Error: Input must be a non-Empty object";
      if (typeof func !== 'function') throw "Error: Second argument must be a non-Empty Function";
      let result = {};
      Object.keys(inputObject).forEach(key => {
            if (typeof inputObject[key] !== 'number') throw "Error: All values in the object must be numbers";
            let funcResult = func(inputObject[key]);
            if(funcResult<=0) throw `Error: Function ${func} result must be greater than 0, but got ${funcResult}`
            result[key] = parseFloat(Math.sqrt(funcResult).toFixed(2));
      });
      return result;
};
