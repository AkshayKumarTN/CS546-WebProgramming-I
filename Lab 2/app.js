// /* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
// do not forget that you need to create the package.json and add the start command to run app.js as the starting script and the type module property*/

import * as arrayUtils from './arrayUtils.js';
import * as stringUtils from './stringUtils.js';
import * as objectUtils from './objectUtils.js';

// try {
//     // Should Pass
//     let inputArray = [12.5, -3, 12.5, 0, 25, 30, 12.5, 7, 8, 12.5, 25, 14, -7, -3, -3];
//     let expected = {
//         "mean": 9.533333333333333,
//         "median": 12.5,
//         "mode": 12.5,
//         "range": 37,
//         "minimum": -7,
//         "maximum": 30,
//         "count": 15,
//         "sum": 143
//       };
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.arrayStats(inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`arrayStats passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     let inputArray = [[1, 2, 3], 2.5];
//     let expected = { '1': 2, '2': 2, '3': 2, '4': 1, '5': 2, '6': 2 };
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.numberOfOccurrences(...inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result) ? "Pass" : "Fail"}`);
//     console.log(`numberOfOccurrences passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }




// // arrayStats(array) => This function will return an object with the following stats of an array: mean, median, mode, range, minimum, maximum, count and sum.----------
// console.log(`${'-'.repeat(60)} \narrayStats \n${'-'.repeat(60)}\n`);

// try {
//     // Should Pass
//     let inputArray = [9, 15, 25.5, -5, 5, 7, 10, 5, 11, 30, 4, 1, -20];
//     let expected = { mean: 7.5, median: 7, mode: 5, range: 50, minimum: -20, maximum: 30, count: 13, sum: 97.5 };
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.arrayStats(inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`arrayStats passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     let inputArray = [7, 9, 11, 15, 19, 20, 35, 0];
//     let expected = { mean: 14.5, median: 13, mode: 0, range: 35, minimum: 0, maximum: 35, count: 8, sum: 116 };
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.arrayStats(inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`arrayStats passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let inputArray = [11, 54, 79, 5, -25, 54, 19, 11, 56, 100];
//     let expected = { mean: 36.4, median: 36.5, mode: [11,54], range: 125, minimum: -25, maximum: 100, count: 10, sum: 364 };
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.arrayStats(inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`arrayStats passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     let inputArray = {a: 2, b: 4};
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.arrayStats(inputArray);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`arrayStats passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     let inputArray = [11, [54, 79], 5, -25, 54, 19, 11, 56, 100];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.arrayStats(inputArray);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`arrayStats passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     console.log(`Input : []`);
//     const result = arrayUtils.arrayStats([]);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`arrayStats passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     let inputArray = 'banana';
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.arrayStats(inputArray);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`arrayStats passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     let inputArray = ["guitar", 1, 3, "apple"];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.arrayStats(inputArray);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`arrayStats passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     console.log(`Input : `);
//     const result = arrayUtils.arrayStats();
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`arrayStats passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// // mergeCommonElements => merge only the elements that are common to every array-----------------------------------------------------
// console.log(`\n${'-'.repeat(60)} \nmergeCommonElements \n${'-'.repeat(60)}\n`);

// try {
//     // Should Fail
//     let inputArray = {a: 2, b: 4};
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.mergeCommonElements(inputArray);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`arrayStats passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     let inputArray = [[3, 4, 1, -2, -4], [3, 45, 1, 24, -4], [112, "-4", 0, 1, 3]];
//     let expected = [1, 3];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.mergeCommonElements(...inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`mergeCommonElements passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }


// try {
//     // Should Pass
//     let inputArray = [[35, "hello", 24, ["abc", 7], 3, -4], [3, ["62", 4], 1, 24, -4, "abc"]];
//     let expected = [-4, 3, 24, "abc"];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.mergeCommonElements(...inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`mergeCommonElements passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     let inputArray = [[5, 3, "apple", "banana"], [5, "banana", 2, 4], [1, 5, "apple", "banana", 0]];
//     let expected = [5, "banana"];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.mergeCommonElements(...inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`mergeCommonElements passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     let inputArray = [[4, [5, "apple"], 3], [3, 4, [5, "apple"]], [3, "apple", 6, 7]];
//     let expected = [3, "apple"];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.mergeCommonElements(...inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`mergeCommonElements passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let inputArray = [[4, 3], [5,6], [7,9]];
//     let expected = [];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.mergeCommonElements(...inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`mergeCommonElements passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     let inputArray = [["apple", "apple"], ["apple", "apple", "banana"], ["apple", "apple", "mango"]];
//     let expected = ["apple"];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.mergeCommonElements(...inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`mergeCommonElements passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     let inputArray = [[1, 2, 3], "string", [4, 5, 6]];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.mergeCommonElements(...inputArray);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`mergeCommonElements passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     let inputArray = [[1, 2, 3], [], [4, 5, 6]];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.mergeCommonElements(...inputArray);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`mergeCommonElements passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     let inputArray = [[1, 2, 3], [], [4, 5, 6]];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.mergeCommonElements(...inputArray);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`mergeCommonElements passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// // numberOfOccurrences => -----------------------------------------------------------------------------------------------------------
// console.log(`\n${'-'.repeat(60)} \nNumberOfOccurrences \n${'-'.repeat(60)}\n`);

// try {
//     // Should Pass
//     let inputArray = [[1, 2, 3], [4, 5, 6, 1], [2, 5, 6, 3]];
//     let expected = {'1': 2, '2': 2, '3': 2, '4': 1, '5': 2, '6': 2};
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.numberOfOccurrences(...inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`numberOfOccurrences passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     let inputArray = [[1, "foo", "bar"], ["bar", 5, 6, 1], ["foo", 5, 6, 3]];
//     let expected = {'1': 2, '3': 1,'5': 2, '6': 2, foo: 2, bar: 2};
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.numberOfOccurrences(...inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`numberOfOccurrences passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     let inputArray = [["foo", 10], ["bar", "hello"], ["foo", "world"], ["baz", 30], ["foo", 5], ["bar", 15], ["baz", 20]];
//     let expected = {"5":1,"10":1,"15":1,"20":1,"30":1,"foo":3,"bar":2,"hello":1,"world":1,"baz":2};
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.numberOfOccurrences(...inputArray);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`numberOfOccurrences passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     let inputArray = [["key", "value"], [], ["key", "value"]];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.numberOfOccurrences(...inputArray);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`numberOfOccurrences passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     let inputArray = [["key", "value"], "not an array", ["key", "value"]];
//     console.log(`Input : ${JSON.stringify(inputArray)}`);
//     const result = arrayUtils.numberOfOccurrences(...inputArray);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`numberOfOccurrences passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     console.log(`Input : `);
//     const result = arrayUtils.numberOfOccurrences();
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`numberOfOccurrences passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// // camelCase => ---------------------------------------------------------------------------------------------------------------------
// console.log(`${'-'.repeat(60)} \ncamelCase \n${'-'.repeat(60)}\n`);

// try {
//     // Should Pass
//     let input = "THIS is A mixED cASe sentence";
//     let expected = 'thisIsAMixedCaseSentence';
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.camelCase(input);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`camelCase passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     let input = "my function rocks";
//     let expected = 'myFunctionRocks';
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.camelCase(input);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`camelCase passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let input = 'FOO BAR';
//     let expected = 'fooBar';
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.camelCase(input);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`camelCase passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let input = "How now brown cow";
//     let expected = 'howNowBrownCow';
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.camelCase(input);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`camelCase passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     console.log(`Input : `);
//     const result = stringUtils.camelCase();
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`camelCase passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     let input = '';
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.camelCase(input);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`camelCase passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     let input = 123;
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.camelCase(input);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`camelCase passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     let input = ["Hello", "World"];
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.camelCase(input);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`camelCase passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// // replaceCharsAtIndexes => ---------------------------------------------------------------------------------------------------------------------

// console.log(`${'-'.repeat(60)} \nreplaceCharsAtIndexes \n${'-'.repeat(60)}\n`);

// try {
//     // Should Pass
//     let input1 = 'supercalifragilisticexpialidocious';
//     let input2 = [5, 10, 15];
//     let expected = 'supercalifragilistlfexpsalldoasous';
//     console.log(`Input1 : ${JSON.stringify(input1)}`);
//     console.log(`Input1 : ${JSON.stringify(input2)}`);
//     const result = stringUtils.replaceCharsAtIndexes(input1, input2);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`replaceCharsAtIndexes passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     let input1 = "Daddy";
//     let input2 = [2];
//     let expected = 'Daday';
//     console.log(`Input1 : ${JSON.stringify(input1)}`);
//     console.log(`Input1 : ${JSON.stringify(input2)}`);
//     const result = stringUtils.replaceCharsAtIndexes(input1, input2);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`replaceCharsAtIndexes passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let input1 = "abcabc";
//     let input2 = [1, 4];
//     let expected = 'abcaac';
//     console.log(`Input1 : ${JSON.stringify(input1)}`);
//     console.log(`Input1 : ${JSON.stringify(input2)}`);
//     const result = stringUtils.replaceCharsAtIndexes(input1, input2);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`replaceCharsAtIndexes passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let input1 = "mississippi";
//     let input2 = [1, 4, 7];
//     let expected = 'missmssspps';
//     console.log(`Input1 : ${JSON.stringify(input1)}`);
//     console.log(`Input1 : ${JSON.stringify(input2)}`);
//     const result = stringUtils.replaceCharsAtIndexes(input1, input2);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`replaceCharsAtIndexes passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     let input1 = "foobar";
//     let input2 = [0];
//     console.log(`Input1 : ${JSON.stringify(input1)}`);
//     console.log(`Input1 : ${JSON.stringify(input2)}`);
//     const result = stringUtils.replaceCharsAtIndexes(input1, input2);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`replaceCharsAtIndexes passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     let input1 = "";
//     let input2 = [2];
//     console.log(`Input1 : ${JSON.stringify(input1)}`);
//     console.log(`Input1 : ${JSON.stringify(input2)}`);
//     const result = stringUtils.replaceCharsAtIndexes(input1, input2);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`replaceCharsAtIndexes passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     let input1 = 546;
//     let input2 = [2];
//     console.log(`Input1 : ${JSON.stringify(input1)}`);
//     console.log(`Input1 : ${JSON.stringify(input2)}`);
//     const result = stringUtils.replaceCharsAtIndexes(input1, input2);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`replaceCharsAtIndexes passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     let input1 = "hello";
//     let input2 = [0,2];
//     console.log(`Input1 : ${JSON.stringify(input1)}`);
//     console.log(`Input1 : ${JSON.stringify(input2)}`);
//     const result = stringUtils.replaceCharsAtIndexes(input1, input2);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`replaceCharsAtIndexes passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// // compressString => ---------------------------------------------------------------------------------------------------------------------

// console.log(`${'-'.repeat(60)} \ncompressString \n${'-'.repeat(60)}\n`);


// try {
//     // Should Pass
//     let input = "aaabbccc";
//     let expected = 'a3b2c3';
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.compressString(input);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`compressString passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let input = "hello";
//     let expected = 'hel2o';
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.compressString(input);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`compressString passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let input = "hi world";
//     let expected = 'hi world';
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.compressString(input);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`compressString passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     let input = "aaAA";
//     let expected = 'a2A2';
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.compressString(input);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`compressString passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     let input = "";
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.compressString(input);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`compressString passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     let input = "     ";
//     console.log(`Input : ${JSON.stringify(input)}`);
//     const result = stringUtils.compressString(input);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`compressString passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     console.log(`Input : `);
//     const result = stringUtils.compressString();
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`compressString passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// // deepEquality => ---------------------------------------------------------------------------------------------------------------------

// console.log(`${'-'.repeat(60)} \ndeepEquality \n${'-'.repeat(60)}\n`);

try {
    // Should Pass
    const first = { person: { first: "John", last: "Doe" }, age: 30 };
    const second = { person: { last: "Doe", first: "Jane" }, age: 30 };
    let expected = false;
    console.log(`Input1 : ${JSON.stringify(first)}`);
    console.log(`Input2 : ${JSON.stringify(second)}`);
    const result = objectUtils.deepEquality(first,second);
    console.log(`Expected : ${JSON.stringify(expected)}`);
    console.log(`Output : ${JSON.stringify(result)}`);
    console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
    console.log(`deepEquality passed successfully \n${'-'.repeat(40)}`);
} catch (e) {
    console.error(`${e} \n${'-'.repeat(40)}`);
}

// try {
//     // Should Pass
//     const first = {a: 2, b: 3};
//     const second = {a: 2, b: 4};
//     let expected = false;
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.deepEquality(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`deepEquality passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     const first = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"};
//     const second = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}};
//     let expected = true;
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.deepEquality(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`deepEquality passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     const first = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}};
//     const second = {a: 2, b: 4};
//     let expected = false;
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.deepEquality(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`deepEquality passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     const first = {};
//     const second = {a: 2, b: 4};
//     let expected = false;
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.deepEquality(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`deepEquality passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     const first = {};
//     const second = {};
//     let expected = true;
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.deepEquality(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`deepEquality passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     const first = [1,2,7];
//     const second = [1,2,7];
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.deepEquality(first,second);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`deepEquality passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     const first = "Good";
//     const second = "Good";
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.deepEquality(first,second);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`deepEquality passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     console.log(`Input1 : `);
//     console.log(`Input2 : `);
//     const result = objectUtils.deepEquality();
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`deepEquality passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// // commonKeysValues => ---------------------------------------------------------------------------------------------------------------------

// console.log(`${'-'.repeat(60)} \ncommonKeysValues \n${'-'.repeat(60)}\n`);

// try {
//     // Should Pass
//     const first = { a: { b: { c: "match", d: "different" } }, x: 42 };
//     const second = { x: 42, a: { b: { c: "match", e: "extra" } } };
//     let expected = {
//         "c": "match",
//         "x": 42
//       };
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.commonKeysValues(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     const first = {name: {first: "Patrick", last: "Hill"}, age: 46};
//     const second = {school: "Stevens", name: {first: "Patrick", last: "Hill"}};
//     let expected = {name: {first: "Patrick", last: "Hill"}, first: "Patrick", last: "Hill"};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.commonKeysValues(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     const first = {name: {first: "Patrick", last: "Hill J"}, age: 46};
//     const second = {school: "Stevens", name: {first: "Patrick", last: "Hill"}};
//     let expected = {first: "Patrick"};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.commonKeysValues(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     const first = {name: {first: "Patrick", last: "Hill J"}, age: 46};
//     const second = {school: "Stevens", name: {first: "Patrick", last: "Hill"}, last: "Hill J", };
//     let expected = {first: "Patrick"};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.commonKeysValues(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     const first = {name: {first: "Patrick", last: "Hill J"}, age: 46};
//     const second = {school: "Stevens", name: {first: "Patrick", last: "Hill"}, last: "Hill J", test: {first: "Patrick", last: "Hill J"}};
//     let expected = {first: "Patrick"};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.commonKeysValues(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Pass
//     const first = {a: 2, b: {c: true, d: false}};
//     const second = {b: {c: true, d: false}, foo: "bar"};
//     let expected = {b: {c: true, d: false}, c: true, d: false };
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.commonKeysValues(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     const first = {};
//     const second = {};
//     let expected = {};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.commonKeysValues(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     const first = {k: 1};
//     const second = {h: 2};
//     let expected = {};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.commonKeysValues(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     const first = "Good";
//     const second = "Good";
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.commonKeysValues(first,second);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     console.log(`Input1 : `);
//     console.log(`Input2 : `);
//     const result = objectUtils.commonKeysValues();
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     const first = [1,2,9];
//     const second = [1,2,9];
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.commonKeysValues(first,second);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     const first = 45;
//     const second = {h: 2};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${JSON.stringify(second)}`);
//     const result = objectUtils.commonKeysValues(first,second);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`commonKeysValues passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }


// // calculateObject => ---------------------------------------------------------------------------------------------------------------------

// console.log(`${'-'.repeat(60)} \ncalculateObject \n${'-'.repeat(60)}\n`);

// try {
//     // Should Pass
//     const first = { a: 3, b: 7, c: 5 };
//     const second = n => n * 2;
//     let expected = {"a":2.45,"b":3.74,"c":3.16};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${second}`);
//     const result = objectUtils.calculateObject(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`calculateObject passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Pass
//     const first = { a: 2, b: 7, c: 4 };
//     const second = n => n + 2;
//     let expected = {"a":2.00,"b":3.00,"c":2.45};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${second}`);
//     const result = objectUtils.calculateObject(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`calculateObject passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     const first = { a: 2, b: 7, c: 4 };
//     const second = "n => n + 2";
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : '${second}'`);
//     const result = objectUtils.calculateObject(first,second);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`calculateObject passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     const first = [{ a: 2, b: 7, c: 4 }];
//     const second = n => n + 2;
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${second}`);
//     const result = objectUtils.calculateObject(first,second);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`calculateObject passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     const first = [];
//     const second = n => n + 2;
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${second}`);
//     const result = objectUtils.calculateObject(first,second);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`calculateObject passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     const first = {};
//     const second = n => n + 2;
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${second}`);
//     const result = objectUtils.calculateObject(first,second);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`calculateObject passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     const first = { a: 2, b: 7, c: 4 };
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : `);
//     const result = objectUtils.calculateObject(first);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`calculateObject passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     const first = { a: 3, b: 7, c: '5' };
//     const second = n => n * 2;
//     let expected = {"a":2.45,"b":3.74,"c":3.16};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${second}`);
//     const result = objectUtils.calculateObject(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`calculateObject passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }

// try {
//     // Should Fail
//     const first = { a: 3, b: 7, c: -1 };
//     const second = n => n * 2;
//     let expected = {"a":2.45,"b":3.74,"c":3.16};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${second}`);
//     const result = objectUtils.calculateObject(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`calculateObject passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
// try {
//     // Should Fail
//     const first = { a: 3, b: 7, c: 0 };
//     const second = n => n * 2;
//     let expected = {"a":2.45,"b":3.74,"c":3.16};
//     console.log(`Input1 : ${JSON.stringify(first)}`);
//     console.log(`Input2 : ${second}`);
//     const result = objectUtils.calculateObject(first,second);
//     console.log(`Expected : ${JSON.stringify(expected)}`);
//     console.log(`Output : ${JSON.stringify(result)}`);
//     console.log(`Status : ${JSON.stringify(expected) === JSON.stringify(result)? "Pass" : "Fail"}`);
//     console.log(`calculateObject passed successfully \n${'-'.repeat(40)}`);
// } catch (e) {
//     console.error(`${e} \n${'-'.repeat(40)}`);
// }
