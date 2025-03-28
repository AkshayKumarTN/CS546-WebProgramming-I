//Export the following functions using ES6 Syntax
import axios from "axios";

const PEOPLE_URL = "https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json";

const CheckString = (data) => {
    if (data == null || data === 'undefined') throw 'Error: Input String is Empty';
    if (typeof data !== 'string') throw 'Error: Input type is not a String.';
    if (!data.trim().length > 0) throw 'Error: Input String is Empty';
}
const getPeople = async () => {
    try {
        const { data } = await axios.get(PEOPLE_URL);
        return data;
    } catch (error) {
        throw "Error: Unable to fetch people data";
    }
};

export const getPersonById = async (id) => {
    try {
        CheckString(id);
        const people = await getPeople();
        const personData = people.filter(person => person.id === id.trim());
        if (personData == undefined || personData == null || personData.length == 0) throw 'Error: person not found';
        return personData[0];
    }
    catch (error) {
        console.log(error);
    }
};

export const sameJobTitle = async (jobTitle) => {
    try {
        CheckString(jobTitle);
        const people = await getPeople();
        const personData = people.filter(person => person.job_title.toLowerCase() === jobTitle.trim().toLowerCase());
        if (personData == undefined || personData == null || personData.length < 2) throw 'Error: There are not two people with that job title';
        return personData;
    }
    catch (error) {
        console.log(error);
    }
};

export const getPostalCodes = async (city, state) => {
    try {
        CheckString(city);
        CheckString(state);
        const people = await getPeople();
        const personData = people.filter(person => person.city.toLowerCase() === city.trim().toLowerCase() && person.state.toLowerCase() === state.trim().toLowerCase());
        const PostalCodes = personData.map(person => person.postal_code).sort((a, b) => a.localeCompare(b));
        if (PostalCodes == undefined || PostalCodes == null || PostalCodes.length == 0) throw 'Error: There are no postal_codes for the given city and state combination';
        return PostalCodes;
    }
    catch (error) {
        console.log(error);
    }
};

export const sameCityAndState = async (city, state) => {
    CheckString(city);
    CheckString(state);
    const people = await getPeople();
    const personData = people.filter(person => person.city.toLowerCase() === city.trim().toLowerCase());
    if (personData == undefined || personData == null || personData.length < 2) throw 'Error: There are not two people in same city and state';
    personData.sort((a, b) => a.last_name.localeCompare(b.last_name));
    const fullNameList = personData.map(person => `${person.first_name} ${person.last_name}`);
    return fullNameList;
};

export const sameCompany = async (companyId) => {
    CheckString(companyId);
    const people = await getPeople();
    const personData = people.filter(person => person.company_id === companyId.trim());
    if (personData == undefined || personData == null || personData.length == 0) return [];
    personData.sort((a, b) => a.last_name.localeCompare(b.last_name));
    const fullNameList = personData.map(person => `${person.first_name} ${person.last_name}`);
    return fullNameList;
};


