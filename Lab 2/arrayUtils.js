/* Todo: Implment the functions below and then export them
      using ES6 syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/


function checkInputExists(input) {
  if (input == undefined || input == null) throw 'Error: Input does not exist';
}

function checkInputTypeIsArray(input) {
  if (!Array.isArray(input)) throw 'Error: Input is not an array.';
}

function checkIfArrayIsEmpty(input) {
  if (input == undefined || input.length == 0) throw 'Error: Input Array is empty.';
}

function checkArrayNumbers(input) {
  if (!input.every(num => typeof num === "number")) throw 'Error: The array elements are not all numbers.';
}


// arrayStats => This function will return an object with the following stats of an array: mean, median, mode, range, minimum, maximum, count and sum.
export const arrayStats = (arr) => {
  checkInputExists(arr);
  checkInputTypeIsArray(arr);
  checkIfArrayIsEmpty(arr);
  checkArrayNumbers(arr);
  // First sort the array from lowest to highest numbers before performing your calculations
  arr.sort((a, b) => a - b);
  let count = arr.length; // Count = number of elements
  let sum = arr.reduce((element1, element2) => element1 + element2, 0); // Sum = sum of all elements
  // Mean = sum of all elements / count
  let mean = sum / count;
  // Median = middle value or average of two middle values
  let median = count % 2 === 0 ? (arr[count / 2 - 1] + arr[count / 2]) / 2 : arr[Math.floor(count / 2)];
  // Mode = most frequently occurring number(s)
  var uniqNum = {};
  var numCounter = function (num, counter) {
    if (!uniqNum.hasOwnProperty(num)) {
      uniqNum[num] = 1;
    } else {
      uniqNum[num]++;
    }
  };
  arr.forEach(numCounter);
  let mostFrequentElement = Object.keys(uniqNum)
    .sort((a, b) => uniqNum[b] - uniqNum[a])                       // sort by frequency
    .filter((val, ind, array) => uniqNum[array[0]] == uniqNum[val]) // leave only most frequent
    .map(val => Number(val));
  let mode = mostFrequentElement.length == count ? 0 : mostFrequentElement.length == 1 ? mostFrequentElement[0] : mostFrequentElement;
  let max = arr[count - 1];
  let min = arr[0];
  return {
    mean, median, mode,
    range: arr[count - 1] - arr[0],
    minimum: arr[0],
    maximum: arr[count - 1],
    count, sum
  };

};
export const mergeCommonElements = (...arr) => {
  checkInputExists(arr);
  if (!arr.every(element => Array.isArray(element))) throw "Error: Input Array is not all array.";
  if (arr.length < 2) throw "Error: Input is less than two arrays.";
  if (!arr.every(element => element.length > 0)) throw "Error: Input Array has One or more empty array.";
  let flattenArray = [];
  arr.forEach(element => {
    flattenArray.push(element.flat(Infinity));
  });


  const commonElements = flattenArray.reduce((acc, currentArray) => {
    return acc.filter(element => currentArray.includes(element));
  }).sort((a, b) => a - b);


  let restut = commonElements.filter((value, index, self) => self.indexOf(value) === index);;
  const numberArr = restut.filter(item => typeof item === "number").map(Number).sort((a, b) => a - b);
  const stringArr = restut.filter(item => typeof item !== "number").sort();
  return [...numberArr, ...stringArr];
};
export const numberOfOccurrences = (...arr) => {
  checkInputExists(arr);
  if (arr.length < 1) throw "Error: Input is less than one arrays.";
  if (!arr.every(element => Array.isArray(element))) throw "Error: Input Array is not all array.";
  if (!arr.every(element => element.length > 0)) throw "Error: Input Array has One or more empty array.";
  let flattenArray = arr.flat(Infinity);
  if (!(flattenArray.every(item => typeof item === "number" || (typeof item === "string" && /^[a-zA-Z0-9]+$/.test(item))))) {
    throw "Error: Array elements must be numbers or strings containing only letters.";
  }
  let result = {};
  flattenArray.forEach(element => result[element] = (result[element] || 0) + 1);
  
  return result
};

