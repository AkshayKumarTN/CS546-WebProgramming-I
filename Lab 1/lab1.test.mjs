import * as lab1 from "./lab1.mjs"; 

console.log('questionOne');
// make 5 calls to questionOne passing in different inputs
console.log(lab1.questionOne([7])); // calls the function and then outputs the return value: 5040 
console.log(lab1.questionOne([4, 2, 7])); // returns and then outputs: [24, 2, 5040]
console.log(lab1.questionOne([3,8,9])); // returns and then outputs: [6, 40230, 362880] 
console.log(lab1.questionOne([4])); // returns and then outputs: [24]
console.log(lab1.questionOne([5, 0, 3])); // returns and then outputs: [120, 1, 6]
console.log(lab1.questionOne([])); // returns and then outputs: []
console.log(lab1.questionOne()); // returns and then outputs: []

console.log('questionTwo');
// make 5 calls to questionTwo passing in different inputs
console.log(lab1.questionTwo([5, 3, 10])); // calls the function and then outputs the return value: {5:true, 3: true, 10: false}
console.log(lab1.questionTwo([2])); // returns and then outputs: {2: true} 
console.log(lab1.questionTwo([5, 10, 9])); // returns and then outputs: {5: true, 10: false, 9: false}
console.log(lab1.questionTwo([2, 7, 9, 1013])); // returns and then outputs: {2: true, 7: true, 9: false, 1013: true}
console.log(lab1.questionTwo([2, -5, 9])); // returns and then outputs: {2: true, -5: false, 9: false}
console.log(lab1.questionTwo([])); // returns and then outputs: {}
console.log(lab1.questionTwo()); // returns and then outputs: {}


console.log('questionThree');
// make 5 calls to questionThree
console.log(lab1.questionThree("Hello World  123!")); // returns and then outputs: {uppercase: 2, lowercase: 8, numbers: 3, spaces: 3, otherCharacters: 1}
console.log(lab1.questionThree("1234 ABcd ef!")); // returns and then outputs {uppercase: 2, lowercase: 4, numbers: 4, spaces: 2, otherCharacters: 1}
console.log(lab1.questionThree("  1234 ABcd ef!  $  ")); // returns and then outputs {uppercase: 2, lowercase: 4, numbers: 4, spaces: 8, otherCharacters: 2}
console.log(lab1.questionThree("")); // returns and then outputs {uppercase: 0, lowercase: 0, numbers: 0, spaces: 0, otherCharacters: 0}
console.log(lab1.questionThree("     ")); // returns and then outputs {uppercase: 0, lowercase: 0, numbers: 0, spaces: 5, otherCharacters: 0}
console.log(lab1.questionThree()); // returns and then outputs {uppercase: 0, lowercase: 0, numbers: 0, spaces: 0, otherCharacters: 0}

console.log('questionFour');
// make 5 calls to questionFour
console.log(lab1.questionFour([3, "guitar", 1, "bass", -10])); //would return and then output [-10, 1, 3, "bass", "guitar"]
console.log(lab1.questionFour([0, "Patrick", 100, "Hill", -50])); //would return and then output [-50, 0, 100, "Hill", "Patrick"]
console.log(lab1.questionFour([123, "Web Programming", 500, "Programming"])); //would return and then output [123, 500, "Programming", "Web Programming"]
console.log(lab1.questionFour([123, "Web Programming", "6", 1, "4", "2", "Programming", 3, 5])); //would return and then output [ 1, 3, 5, 123, '2', '4', '6', 'Programming', 'Web Programming' ]
console.log(lab1.questionFour([123, "Web Programming", "6", 1, "9Programming", "2", "2Programming", 3, 5])); //would return and then output [ 1, 3, 5, 123, '2', '2Programming', '6', '9Programming', 'Web Programming' ]
console.log(lab1.questionFour(["Web", "Programming", "", -1, 1])); //would return and then output [ -1, 1, '', 'Programming', 'Web' ]
console.log(lab1.questionFour([])); //would return and then output []
console.log(lab1.questionFour()); //would return and then output []
 