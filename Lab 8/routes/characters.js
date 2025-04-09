//import express and express router as shown in lecture code and worked in previous labs.  Import your data functions from /data/characters.js that you will call in your routes below
import helpers from '../helpers.js';
import { Router } from 'express';
const router = Router();

import * as characterMethods from '../data/characters.js';

router.route('/').get(async (req, res) => {
  //code here for GET will render the home handlebars file
  try {
  res.render('home',{title: 'Marvel Universe Character Search'});
  } catch (e) {
    return res.status(500).render('error', {
      title: '500 - Error',
      errorMessage: e
    });
  }
});

router.route('/searchmarveluniverse').post(async (req, res) => {
  //code here for POST this is where your form will be submitting searchCharacterByName and then call your data function passing in the searchCharacterByName and then rendering the search results of up to 15 characters.
  let marvelSearch = req.body;
  if (!marvelSearch || Object.keys(marvelSearch).length === 0) {
    return res.status(400).render('error', {
      title: '400 - Error',
      errorMessage: 'There are no fields in the request body.'
    });
  }
  try {
    //marvelSearch
    helpers.inputStringCheck(marvelSearch.searchByCharactersName, 'character name');
  } catch (e) {
    return res.status(400).render('error', {
      title: '400 - Error',
      errorMessage: e
    });
  }
  try{
    let resultData = await characterMethods.searchCharactersByName(marvelSearch.searchByCharactersName);
    const results = resultData?.data?.results?.slice(0, 20) || [];
    res.render('characterSearchResults',{
      title: 'Characters Found',
      searchQuery: marvelSearch.searchByCharactersName,
      characters: results
    });
  }
  catch (e) {
    return res.status(500).render('error', {
      title: '500- Error',
      errorMessage: 'An error occurred while fetching character data. Please try again.'
    });
  }
});

router.route('/character/:id').get(async (req, res) => {
  //code here for GET a single character
  try {
    req.params.id = helpers.checkId(req.params.id);
  } catch (e) {
    return res.status(400).render('error', {
      title: '400 - Error',
      errorMessage: e
    });
  }
  try {
    const result  = await characterMethods.getCharacterById(req.params.id);
    const character = result?.data?.results?.[0];
    if (!character) {
      throw '404 -Not Found';
    }
    const thumbnailUrl = `${character.thumbnail.path}/portrait_uncanny.jpg`;

    res.render('characterById', {
      title: character.name,
      name: character.name,
      image: thumbnailUrl,
      description: character.description || 'No description available.',
      comics: character.comics.items.map(comic => comic.name)
    });

  } catch (e) {
    return res.status(404).render('error', {
      title: '404 - Not Found',
      errorMessage: `No character found with ID: ${req.params.id}`
    });
  }
});

//export router
export default router;