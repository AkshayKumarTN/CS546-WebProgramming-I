//Export the following functions using ES6 Syntax
import helpers from '../helpers.js';
import { movies } from '../config/mongoCollections.js';
import { ObjectId } from 'mongodb';

export const createMovie = async (
  title,
  plot,
  genres,
  rating,
  studio,
  director,
  castMembers,
  dateReleased,
  runtime
) => {

  //title
  helpers.CheckTitle(title);

  //plot
  helpers.inputStringCheck(plot, 'plot');

  //genres
  helpers.CheckGenres(genres);

  //rating
  helpers.CheckRating(rating);

  //studio
  helpers.CheckStudio(studio);

  //director
  helpers.CheckDirector(director);

  //castMembers
  helpers.CheckCastMembers(castMembers);

  //dateReleased
  helpers.inputStringCheck(dateReleased, 'dateReleased');
  helpers.validateDate(dateReleased, 'dateReleased');

  //runtime
  helpers.inputStringCheck(runtime, 'runtime');
  helpers.validateRunTime(runtime);

  genres = genres.map(member => member.trim());
  castMembers = castMembers.map(member => member.trim());

  const movieData = {
    title: title.trim(),
    plot: plot.trim(),
    genres: genres,
    rating: rating.trim(),
    studio: studio.trim(),
    director: director.trim(),
    castMembers: castMembers,
    dateReleased: dateReleased.trim(),
    runtime: runtime.trim(),
    reviews: [],
    overallRating: 0
  };

  const moviesCollection = await movies();
  const insertInfo = await moviesCollection.insertOne(movieData);
  if (!insertInfo.acknowledged || !insertInfo.insertedId) throw 'Error: Could not add Movie';
  const newId = insertInfo.insertedId.toString();
  const MovieResult = await getMovieById(newId);
  return MovieResult;

};

export const getAllMovies = async () => {
  const moviesCollection = await movies();
  let moviesList = await moviesCollection.find({}).toArray();
  if (!moviesList) throw 'Error: Could not get all movies';
  moviesList = moviesList.map((movie) => ({
    _id: movie._id,
    title: movie.title
  }));
  return moviesList;
};

export const getMovieById = async (movieId) => {
  movieId = helpers.checkId(movieId);
  const moviesCollection = await movies();
  const movie = await moviesCollection.findOne({ _id: new ObjectId(movieId) });
  if (movie === null) throw 'Error: No movie with that id';
  return movie;
};

export const removeMovie = async (movieId) => {
  movieId = helpers.checkId(movieId);
  const moviesCollection = await movies();
  const deletionInfo = await moviesCollection.findOneAndDelete({ _id: new ObjectId(movieId) });
  if (!deletionInfo) {
    throw `Error: Could not delete movie with id of ${movieId}`;
  }
  return `${deletionInfo.title} has been successfully deleted!`;
};

export const updateMovie = async (
  movieId,
  title,
  plot,
  genres,
  rating,
  studio,
  director,
  castMembers,
  dateReleased,
  runtime
) => {
  //movieId
  movieId = helpers.checkId(movieId);
  let movieData = await getMovieById(movieId);

  //title
  helpers.CheckTitle(title);
  //plot
  helpers.inputStringCheck(plot, 'plot');
  //genres
  helpers.CheckGenres(genres);
  //rating
  helpers.CheckRating(rating);
  //studio
  helpers.CheckStudio(studio);
  //director
  helpers.CheckDirector(director);
  //castMembers
  helpers.CheckCastMembers(castMembers);
  //dateReleased
  helpers.inputStringCheck(dateReleased, 'dateReleased');
  helpers.validateDate(dateReleased, 'dateReleased');
  //runtime
  helpers.inputStringCheck(runtime, 'runtime');
  helpers.validateRunTime(runtime);

  genres = genres.map(member => member.trim());
  castMembers = castMembers.map(member => member.trim());

  const { _id, ...updatedMovieData } = movieData;
  
  updatedMovieData.title = title.trim();
  updatedMovieData.plot = plot.trim();
  updatedMovieData.genres = genres;
  updatedMovieData.rating = rating.trim();
  updatedMovieData.studio = studio.trim();
  updatedMovieData.director = director.trim();
  updatedMovieData.castMembers = castMembers;
  updatedMovieData.dateReleased = dateReleased.trim();
  updatedMovieData.runtime = runtime.trim();


  const moviesCollection = await movies();

  const updatedInfo = await moviesCollection.findOneAndUpdate(
    { _id: new ObjectId(movieId) },
    { $set: updatedMovieData },
    { returnDocument: 'after' }
  );
  if (!updatedInfo) {
    throw 'Error: could not update movie successfully';
  }
  return updatedInfo;
};

const renameMovie = async (id, newName) => {
  //Not used for this lab
};
