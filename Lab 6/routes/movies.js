//require express and express router as shown in lecture code
import helpers from '../helpers.js';
import * as movieMethods from '../data/movies.js';
import { Router } from 'express';

const router = Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const newMovie = await movieMethods.getAllMovies();
      return res.json(newMovie);
    } catch (e) {
      return res.status(500).json(e);
    }
    //code here for GET
  })
  .post(async (req, res) => {
    //code here for POST
    let movieInfo = req.body;
    if (!movieInfo || Object.keys(movieInfo).length === 0) {
      return res.status(400).json({ Error: 'There are no fields in the request body' });
    }
    try {
      //title
      helpers.CheckTitle(movieInfo.title);
      //plot
      helpers.inputStringCheck(movieInfo.plot, 'plot');
      //genres
      helpers.CheckGenres(movieInfo.genres);
      //rating
      helpers.CheckRating(movieInfo.rating);
      //studio
      helpers.CheckStudio(movieInfo.studio);
      //director
      helpers.CheckDirector(movieInfo.director);
      //castMembers
      helpers.CheckCastMembers(movieInfo.castMembers);
      //dateReleased
      helpers.inputStringCheck(movieInfo.dateReleased, 'dateReleased');
      helpers.validateDate(movieInfo.dateReleased, 'dateReleased');
      //runtime
      helpers.inputStringCheck(movieInfo.runtime, 'runtime');
      helpers.validateRunTime(movieInfo.runtime);
    } catch (e) {
      return res.status(400).json(e);
    }
    try {
      const newMovie = await movieMethods.createMovie(
        movieInfo.title,
        movieInfo.plot,
        movieInfo.genres,
        movieInfo.rating,
        movieInfo.studio,
        movieInfo.director,
        movieInfo.castMembers,
        movieInfo.dateReleased,
        movieInfo.runtime
      );
      return res.json(newMovie);
    } catch (e) {
      return res.status(500).json(e);
    }
  });

router.route('/:movieId')
  //code here for GET
  .get(async (req, res) => {
    try {
      req.params.movieId = helpers.checkId(req.params.movieId);
    } catch (e) {
      return res.status(400).json(e);
    }
    try {
      const post = await movieMethods.getMovieById(req.params.movieId);
      return res.json(post);
    } catch (e) {
      return res.status(404).json(e);
    }
  })
  .delete(async (req, res) => {
    //code here for DELETE
    try {
      req.params.movieId = helpers.checkId(req.params.movieId);
    } catch (e) {
      return res.status(400).json(e);
    }
    try {
      const post = await movieMethods.removeMovie(req.params.movieId);
      return res.json(post);
    } catch (e) {
      return res.status(404).json(e);
    }
  })
  .put(async (req, res) => {
    //code here for PUT
    let movieInfo = req.body;
    if (!movieInfo || Object.keys(movieInfo).length === 0) {
      return res.status(400).json({ Error: 'There are no fields in the request body' });
    }

    try {
      //movieId
      req.params.movieId = helpers.checkId(req.params.movieId);
      //title
      helpers.CheckTitle(movieInfo.title);
      //plot
      helpers.inputStringCheck(movieInfo.plot, 'plot');
      //genres
      helpers.CheckGenres(movieInfo.genres);
      //rating
      helpers.CheckRating(movieInfo.rating);
      //studio
      helpers.CheckStudio(movieInfo.studio);
      //director
      helpers.CheckDirector(movieInfo.director);
      //castMembers
      helpers.CheckCastMembers(movieInfo.castMembers);
      //dateReleased
      helpers.inputStringCheck(movieInfo.dateReleased, 'dateReleased');
      helpers.validateDate(movieInfo.dateReleased, 'dateReleased');
      //runtime
      helpers.inputStringCheck(movieInfo.runtime, 'runtime');
      helpers.validateRunTime(movieInfo.runtime);
    } catch (e) {
      return res.status(400).json(e);
    }

    try {
      const newMovie = await movieMethods.updateMovie(
        req.params.movieId,
        movieInfo.title,
        movieInfo.plot,
        movieInfo.genres,
        movieInfo.rating,
        movieInfo.studio,
        movieInfo.director,
        movieInfo.castMembers,
        movieInfo.dateReleased,
        movieInfo.runtime
      );
      return res.json(newMovie);
    } catch (e) {
      return res.status(404).json(e);
    }

  });

export default router;