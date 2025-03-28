import * as lab1 from "./lab1.mjs";

//TODO: Write and call each function in lab1.js 5 times each, passing in different input

console.log(
  "\n -------------------------------- Function 1 --------------------------------"
);
console.log(lab1.questionOne([5, 2, 11])); // returns and then outputs: [ 120, 2, 39916800 ]

console.log(lab1.questionOne([10, 1, 6])); // returns and then outputs: [ 3628800, 1, 720 ]

console.log(lab1.questionOne([7])); // returns and then outputs: [5040]

console.log(lab1.questionOne([])); // returns an empty array or []

console.log(lab1.questionOne([3])); // returns and then outputs: [6]

console.log(
  "\n -------------------------------- Function 2 --------------------------------"
);
console.log(lab1.questionTwo([2, 3, 7]));
// returns and then outputs: {2:true, 3: true, 7: true}

console.log(lab1.questionTwo([8]));
// returns and then outputs: {8: false}

console.log(lab1.questionTwo([-5, 1, 9, 11]));
// returns and then outputs: {-5: false, 1: false, 9: false, 11: ture}

console.log(lab1.questionTwo([2, 17, 9, 1729]));
// returns and then outputs: {2: true, 17: true, 9: false, 1729: false}

console.log(lab1.questionTwo([]));
// returns and then outputs: {}

console.log(lab1.questionTwo());
// returns and then outputs: {}

console.log(
  "\n -------------------------------- Function 3 --------------------------------"
);
console.log(lab1.questionThree("Hello World 2.0")); // returns and then outputs: {uppercase: 2, lowercase: 8, numbers: 2, spaces: 2, otherCharacters: 1}
console.log(lab1.questionThree("CS 546 Web Programming <3")); // returns and then outputs {uppercase: 4, lowercase: 12, numbers: 4, spaces: 4, otherCharacters: 1}
console.log(lab1.questionThree("")); // returns and then outputs {uppercase: 0, lowercase: 0, numbers: 0, spaces: 0, otherCharacters: 0}
console.log(lab1.questionThree(" ")); // returns and then outputs {uppercase: 0, lowercase: 0, numbers: 0, spaces: 1, otherCharacters: 0}
console.log(lab1.questionThree("This is Vishal, i'm a student at stevens.")); // returns and then outputs {uppercase: 2, lowercase: 29, numbers: 0, spaces: 7, otherCharacters: 3}

console.log(
  "\n -------------------------------- Function 4 --------------------------------"
);
console.log(lab1.questionFour([2000, "mac", 3, "book", -5])); // would return and then output [-5, 3, 2000, "book", "mac"]
console.log(lab1.questionFour([123, "Vishal", 1, "99Rathod", 5])); // would return and then output [1, 5, 123, "99Rathod", "Vishal"]
console.log(lab1.questionFour(["qwerty", "CS546", "", -1, 1])); // would return and then output [ -1, 1, '', 'CS546', 'qwerty' ]
console.log(lab1.questionFour(["qwerty", "546CS", "1Vishal", 7])); // would return and then output [ 7, '1Vishal', '546CS', 'qwerty' ]
console.log(
  lab1.questionFour([6, 5, 4, 3, 2, 1, "6", "5", "4", "3", "2", "1"])
); // would return and then output [1,   2,   3,   4,   5, 6, '1', '2', '3', '4', '5', '6']
