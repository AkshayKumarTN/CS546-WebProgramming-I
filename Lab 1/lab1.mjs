export const questionOne = (inputArray = []) => {
    // Implement question 1 here
    function factorial(number) {
        if (number === 0 || number === 1) {
            return 1;
        } else {
            return number * factorial(number - 1);
        }
    }

    return inputArray.map(num => (factorial(num)));;

}

export const questionTwo = (inputArray = []) => {
    // Implement question 2 here
    function checkPrime(number) {
        if (number <= 1) {
            return false;
        }
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    return inputArray.map(num => ({ [num]: checkPrime(num) }));
}

export const questionThree = (str = "") => {
    let characterCount = {
        "uppercase": 0,
        "lowercase": 0,
        "numbers": 0,
        "spaces": 0,
        "otherCharacters": 0
    }
    if (str.length > 0) {
        // Implement question 3 here
        const chars = str.split(""); // chars will be ['H', 'e', 'l', 'l', 'o']
        chars.forEach(char => {
            if (char >= 'A' && char <= 'Z') {
                characterCount.uppercase++;
            } else if (char >= 'a' && char <= 'z') {
                characterCount.lowercase++;
            } else if (char >= '0' && char <= '9') {
                characterCount.numbers++;
            } else if (char === ' ') {
                characterCount.spaces++;
            } else {
                characterCount.otherCharacters++;
            }
        });
    }
    return characterCount;//return result 
}

export const questionFour = (arr=[]) => {
    // Implement question 4 here
    const numbers = arr.filter(item => typeof item === "number").map(Number).sort((a, b) => a - b);
    const strings = arr.filter(item => typeof item !== "number").sort();
    return [...numbers,...strings];//return result 
}

export const studentInfo = {
    firstName: "Akshay Kumar",
    lastName: "Talur Narasimmulu",
    studentId: "20032052",

}; 