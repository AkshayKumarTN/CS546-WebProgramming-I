const exportedMethods = {

    checkString(strVal, varName) {
        if (!strVal) throw `Error: You must supply a ${varName}!`;
        if (typeof strVal !== 'string') throw `Error: ${varName} must be a string!`;
        strVal = strVal.trim();
        if (strVal.length === 0)
            throw `Error: ${varName} cannot be an empty string or string with just spaces`;
        if (!isNaN(strVal))
            throw `Error: ${strVal} is not a valid value for ${varName} as it only contains digits`;
        return strVal;
    },

    inputStringCheck(str, fieldName) {
        if (str == null || str === 'undefined') throw `Error: ${fieldName} field need to have valid values)`;
        if (typeof str !== 'string') throw `Error: ${fieldName} Input type is not a String.`;
        if (!str.trim().length > 0) throw `Error: ${fieldName} Input String is Empty`;
        if (str.trim().includes('  ')) throw `Error: ${fieldName} Input is Invalid - multiple consecutive spaces are not allowed.`;
    },
    // Id Check...............
    checkId(id) {
        this.inputStringCheck(id, 'ID');
        id = id.trim();
        return id;
    }


}

export default exportedMethods;