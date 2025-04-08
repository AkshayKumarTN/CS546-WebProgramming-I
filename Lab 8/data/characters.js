//import axios, md5
import axios from "axios";
import md5 from 'blueimp-md5' //you will need to install this module;

const buildMarvelAPIUrl = async (marvelParameter, marvelCharacterId) => {
  const publickey = '1c8b9d7cc609a74409bfbcde5a81e04c';
  const privatekey = 'a993d42b63b7fa67e63d9908ab2d36948acca0ea';
  const ts = new Date().getTime();
  const stringToHash = ts + privatekey + publickey;
  const hash = md5(stringToHash);
  if (marvelParameter) {
    const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters';
    return baseUrl + '?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash + '&nameStartsWith=' + marvelParameter;
  }
  else {
    const baseUrl = 'https://gateway.marvel.com/v1/public/characters/';
    return baseUrl + marvelCharacterId + '?ts=' + ts + '&apikey=' + publickey + '&hash=' + hash;
  }
}

export const searchCharactersByName = async (name) => {
  //Function to search the api and return up to 15 characters matching the name param
  const marvelAPI = await buildMarvelAPIUrl(name, null);
  const { data } = await axios.get(marvelAPI);
  return data;
};

export const getCharacterById = async (id) => {
  //Function to fetch a character from the api matching the id
  const marvelAPI = await buildMarvelAPIUrl(null, id);
  const { data } = await axios.get(marvelAPI);
  return data;
};
