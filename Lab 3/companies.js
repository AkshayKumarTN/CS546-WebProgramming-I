//Export the following functions using ES6 Syntax
import axios from "axios";
import * as people from './people.js';

const COMPANIES_URL = "https://gist.githubusercontent.com/graffixnyc/90b56a2abf10cfd88b2310b4a0ae3381/raw/f43962e103672e15f8ec2d5e19106e9d134e33c6/companies.json";

const CheckString = (data) => {
    if (data == null || data === 'undefined') throw 'Error: Input String is Empty';
    if (typeof data !== 'string') throw 'Error: Input type is not a String.';
    if (!data.trim().length > 0) throw 'Error: Input String is Empty';
}
const getcompanies = async () => {
    try {
        const { data } = await axios.get(COMPANIES_URL);
        return data;
    } catch (error) {
        throw "Error: Unable to fetch company data";
    }
};


export const listEmployees = async (companyName) => {
    try {
        CheckString(companyName);
        const companies = await getcompanies();
        const companyData = companies.filter(company => company.name.toLowerCase() === companyName.trim().toLowerCase());
        if (companyData == undefined || companyData == null || companyData.length == 0) throw 'Error: Company not found';
        companyData[0].employees = await people.sameCompany(companyData[0].id);
        return companyData[0];
    }
    catch (error) {
        console.log(error);
    }
};

export const sameIndustry = async (industry) => {
    CheckString(industry);
    const companies = await getcompanies();
    const companyData = companies.filter(company => company.industry.toLowerCase() === industry.trim().toLowerCase());
    if (companyData == undefined || companyData == null || companyData.length == 0) throw 'Error: Company not found';
    return companyData;

};

export const getCompanyById = async (id) => {
    CheckString(id);
    const companies = await getcompanies();
    const companyData = companies.filter(company => company.id === id.trim());
    if (companyData == undefined || companyData == null || companyData.length == 0) throw 'Error: Company not found';
    return companyData[0];
};

