/*Here, you can export the data functions
to get the stocks, people, getStockById, getPersonById.  You will import these functions into your routing files and call the relevant function depending on the route. 
*/
import axios from "axios";
import helpers from '../helpers.js';
const PEOPLE_URL = "https://gist.githubusercontent.com/graffixnyc/a1196cbf008e85a8e808dc60d4db7261/raw/9fd0d1a4d7846b19e52ab3551339c5b0b37cac71/people.json";
const STOCKS_URL = "https://gist.githubusercontent.com/graffixnyc/8c363d85e61863ac044097c0d199dbcc/raw/7d79752a9342ac97e4953bce23db0388a39642bf/stocks.json";

const CheckString = (data) => {
    if (data == null || data === 'undefined') throw 'Error: Input String is Empty';
    if (typeof data !== 'string') throw 'Error: Input type is not a String.';
    if (!data.trim().length > 0) throw 'Error: Input String is Empty';
}

export const getStocks = async () => {
    try {
        const { data } = await axios.get(STOCKS_URL);
        return data;
    } catch (error) {
        throw "Error: Unable to fetch Stock data";
    }
};

export const getPeople = async () => {
    try {
        const { data } = await axios.get(PEOPLE_URL);
        return data;
    } catch (error) {
        throw "Error: Unable to fetch people data";
    }
};

export const getStockById = async (id) => {
    id = helpers.checkId(id);
    const stocks = await getStocks();
    const stockData = stocks.filter(stock => stock.id === id.trim());
    if (stockData == undefined || stockData == null || stockData.length == 0) throw 'Error: Stock Not Found!';
    return stockData[0];

};

export const getPersonById = async (id) => {
    id = helpers.checkId(id);
    const people = await getPeople();
    const personData = people.filter(person => person.id === id.trim());
    if (personData == undefined || personData == null || personData.length == 0) throw 'Error: Person Not Found!';
    return personData[0];

};
