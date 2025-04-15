/*
Using client-side JavaScript only (/public/js/form_process.js), you will add an event listener and then listen for the form's submit event; when the form is submitted, you will:

1. Prevent the default behavior of the form.

2. Get the value of the input text element.  
    You should be expecting a variable number of arrays typed into the input separated by commas:  For example: [3, 0, 1, 2, 4], [1, 2, 8, 15], [6, 3, 10, 25, 29]

    All array elements should be whole numbers (negative and 0 are allowed), no decimals. If any of the elements in any of the arrays is not a whole number, you will display an error on the page in the paragraph element that has the id of "error"

    Each array should have at least one element that is a whole number (negative and 0 are allowed), no decimals. (so no empty arrays)

    You can ignore any extra commas between array inputs for example, inputting: [3, 0, 1, 2, 4],, [1, 2, 8, 15], [6, 3, 10, 25, 29], 

    There should be at least one array inputted. 

    If there is/are empty element(s) in the ANY of the arrays that were inputted, you must display an error and not continue.  For example, inputting: [3, 0, 1, , 4], [1, 2, 8, 15] [6, 3, 10, 25, 29]

3. You will then return a single array that has all the values from the arrays inputted sorted from lowest to highest number with no duplicates (so unique elements).  For example:  If our input was: [3, 0, 1, 2, 4], [1, 2, 8, 15], [6, 3, 10, 25, 29] You would return:  [0, 1, 2, 3, 4, 6, 8, 10, 15, 25, 29]

4. Add a list item to the #input_sorted list of result of the sort you have just completed. You will alternate the class for each list item using the classes is-odd and is-even (described below), starting with is-odd first.


If the user does not have a value for the input when they submit, you should not continue processing and instead should inform them of an error somehow or if they enter anything besides an single array or a list of arrays.

Do not forget to hide the error paragraph if the input was valid.  So for example, if I enter in input that is invalid, the application will how the error paragraph with text explaining the issue; for example "Input cannot just be spaces!".  Then if I re-input the input, but this time it was valid, the error paragraph should get hidden. (look at the Simple Dom Example from Lecture 8's lecture code to see an example of that)

YOU MUST USE THE SAME EXACT NAME/ID ATTRIBUTES AS STATED IN THE ASSIGNMENT, THE GRADING SCRIPT WILL BE LOOKING FOR THESE ELEMENTS BY ID AND NAME SO IF YOU DO NOT NAME THEM EXACTLY WHAT IS STATED, YOU WILL GET THE POINTS OFF FOR IT. 

You can use either the DOM API or jQuery (or a mix of both) for the assignment. 


*/


document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("arraySortForm");
    const inputArray = document.getElementById("array_input");
    const errorTag = document.getElementById("error");
    const list = document.getElementById("input_sorted");
    const showError = (message) => {
        errorTag.innerHTML = "Error: " + message;
        errorTag.hidden = false;
        inputArray.focus();

    }
    let listCount = 0;
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        errorTag.hidden = true;
        const InputData = inputArray.value.trim();
        if (!InputData) {
            showError("Input cannot be empty!");
            return;
        }
        let wholeNumbersArray = [];
        try {

            const cleanedInputData = InputData.replace(/\s+/g, ''); // remove all whitespace
            const outsideArrays = cleanedInputData.replace(/\[[^\[\]]*\]/g, "").replace(/,/g, ""); // getting values which are ouside arrays
            if (outsideArrays.length > 0) {
                showError("Input contains values outside of arrays (e.g., '5' or '9'). Wrap all values inside []. Also Nested arrays are not allowed.");
                return;
            }

            // Check for basic structure issues (like "][", "][[", trailing or leading commas)
            if (/\][^\],\s]/.test(InputData) || /\][\[]/.test(InputData)) {
                showError("Missing commas or incorrect brackets between arrays (e.g., ][ ) (expected: ],[ ).");
                return;
            }

            // Count brackets to catch unbalanced structure
            const openingCount = (InputData.match(/\[/g) || []).length;
            const closingCount = (InputData.match(/\]/g) || []).length;

            if (openingCount !== closingCount) {
                showError("Mismatched brackets. Ensure every opening '[' has a matching closing ']'.");
                return;
            }

            // Check for empty arrays or trailing opening bracket
            if (/\[\s*\]/.test(InputData)) {
                showError("One or more arrays are empty.");
                return;
            }

            if (/\[\s*$/.test(InputData)) {
                showError("Incomplete array detected (e.g., '[' with no closing ']').");
                return;
            }

            if (/\]\s*\[/.test(InputData)) {
                showError("Missing comma between arrays. Arrays must be separated by commas.");
                return;
            }
            //  Checking for decimals points like 1.0, 2.0, 2.5
            if (/\b\d+\.\d+\b/.test(InputData)) {
                showError("Decimal numbers like 1.0 or 2.5 are not allowed. Only whole numbers are allowed. (Negative numbers and 0 are allowed)");
                return;
            }
            const extractedArray = InputData.match(/\[[^\[\]]*\]/g);

            if (!extractedArray || extractedArray.length === 0) {
                showError("Input must contain at least one array with Only whole numbers. (Negative numbers and 0 are allowed)");
                return;
            }
            for (const arrryStringItem of extractedArray) {
                const arrryItem = JSON.parse(arrryStringItem);
                if (!Array.isArray(arrryItem)) {
                    showError("Invalid array syntax.");
                    return;
                }
                if (arrryItem.length === 0) {
                    showError("Input Array has One or more empty array or empty element.");
                    return;
                }

                for (const val of arrryItem) {
                    if (val === "" || val === null || val === undefined) {
                        showError("One or more array elements are empty.");
                        return;
                    }      
                    if (typeof val === "string" && val.trim() === "") {
                        showError("One or more elements are empty or invalid.");
                        return;
                    }
                    if (typeof val !== "number" || !Number.isInteger(val)) {
                        showError(`Invalid value "${val}". Only whole numbers are allowed. (Negative numbers and 0 are allowed)`);
                        return;
                    }
                    wholeNumbersArray.push(val);
                }
            }

        } catch (err) {
            showError(typeof err === "string" ? err : "Invalid input. Only whole numbers are allowed. (Negative numbers and 0 are allowed)");
            return;
        }
        const sortedArray = [...new Set(wholeNumbersArray)].sort((a, b) => a - b);
        listCount++;
        let li = document.createElement('li');
        li.innerHTML = `[${sortedArray.join(", ")}]`;
        li.className = listCount % 2 === 0 ? "is-even" : "is-odd";
        list.appendChild(li);
        inputArray.value = '';
        inputArray.focus();

    });
});