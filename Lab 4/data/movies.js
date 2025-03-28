import { movies } from './../config/mongoCollections.js'
import { ObjectId } from 'mongodb';


const inputStringCheck = (str, fieldName) => {
  if (str == null || str === 'undefined') throw `Error: ${fieldName} field need to have valid values)`;
  if (typeof str !== 'string') throw `Error: ${fieldName} Input type is not a String.`;
  if (!str.trim().length > 0) throw `Error: ${fieldName} Input String is Empty`;
  if (str.trim().includes('  ')) throw `Error: ${fieldName} Input is Invalid - multiple consecutive spaces are not allowed.`;
}
const validateDate = (dateString, fieldName) => {
  if (!(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/).test(dateString.trim())) throw `Error: '${fieldName}' is invalid. It must be in mm/dd/yyyy format.`;
  let [month, day, year] = dateString.trim().split('/').map(Number);
  if (isNaN(month) || isNaN(day) || isNaN(year)) throw `Error: ${fieldName} - Invalid date format. Please use MM/DD/YYYY.`;
  if (!(month <= 12 && month >= 1)) throw `Error: ${fieldName} - Invalid month. Month must fall between 1 and 12`;
  const maxDaysinMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (!(day >= 1 && day <= maxDaysinMonth[month - 1])) throw `Error: ${fieldName} - Invalid day for the given month.`;
  if (year < 1900 || year > (new Date().getFullYear() + 2)) throw `Error: ${fieldName} - Year must be between 1900 and ${(new Date().getFullYear() + 2)}`;
}
const validateRunTime = (runTimeString) => {
  runTimeString = runTimeString.trim();
  let runtimeRegex = /^(\d+)h (\d{1,2})min$/;
  if (!(runTimeString.match(runtimeRegex))) throw `Error: Runtime must be in the following format "#h #min". Both #'s must be a positive whole number.`;
  const hrs = parseInt((runTimeString.match(runtimeRegex))[1],10);
  const mins = parseInt((runTimeString.match(runtimeRegex))[2],10);
  // const [spcitalChar, hrs, mins] = (runTimeString.match(runtimeRegex)).map(Number);
  if (!((hrs > 0 && mins >= 0 && mins < 60) || (hrs == 0 && mins > 30 && mins < 60))) throw `Error: Runtime #min must be 0 to 59 and Runtime should be minimum of at least 0h 31min.`;
}
//export the following functions using ES6 syntax
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
  inputStringCheck(title, 'title');
  if (title.trim().length < 2 || !/^[a-zA-Z0-9\s]+$/.test(title.trim())) throw "Error: Title must be at least two characters and can contain only letters and numbers. No special characters or punctuation";
  //plot
  inputStringCheck(plot, 'plot');
  //genres
  if (!genres) throw 'Error: genres fields need to have valid values';
  if (!Array.isArray(genres) || genres == undefined || genres.length == 0 || !genres.every(item => typeof item === "string" && item.trim().length >= 5 && /^[a-zA-Z\s]+$/.test(item.trim()) && !item.trim().includes('  '))) throw 'Error: genres must be an array of strings, each at least 5 characters long and containing only letters.';
  //rating
  inputStringCheck(rating, 'rating');
  if (!["G", "PG", "PG-13", "R", "NC-17"].includes(rating.trim())) throw "Error: Invalid rating";
  //studio
  inputStringCheck(studio, 'studio');
  if (studio.trim().length < 5 || !/^[a-zA-Z\s]+$/.test(studio.trim())) throw "Error: studio must be at least 5 characters long and only letters a-z or A-Z. No numbers or special characters.";
  //director
  inputStringCheck(director, 'director');
  let splitDirector = director.trim().split(' ')
  if (splitDirector.length !== 2) throw "Error: director must be following format 'first name space last name'.";
  if (!(/^[a-zA-Z]{3,}$/.test(splitDirector[0].trim()) && /^[a-zA-Z]{3,}$/.test(splitDirector[1].trim()))) throw "Error: director must be first name and last name with at least 3 characters each and only letters a-z or A-Z.";
  //castMembers
  if (!castMembers) throw 'Error: castMembers fields need to have valid values';
  if (!Array.isArray(castMembers) || castMembers == undefined || castMembers.length == 0 || !castMembers.every(item => typeof item === "string" && item.trim().length >= 7 && /^[a-zA-Z]{3,} [a-zA-Z]{3,}$/.test(item.trim()) && !item.trim().includes('  '))) throw 'Error: castMembers must be an array of strings, must have the following format "first name space last name" and first name and last name must be at least 3 characters each and only letters a-z or A-Z. No numbers or special characters.';
  //dateReleased
  inputStringCheck(dateReleased, 'dateReleased');
  validateDate(dateReleased, 'dateReleased');
  //runtime
  inputStringCheck(runtime, 'runtime');
  validateRunTime(runtime);

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
    runtime: runtime.trim()
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
  moviesList = moviesList.map((element) => {
    element._id = element._id.toString();
    return element;
  });
  return moviesList;
};

export const getMovieById = async (id) => {
  inputStringCheck(id, 'ID');
  id = id.trim();
  if (!ObjectId.isValid(id)) throw 'Error: invalid object ID';
  const moviesCollection = await movies();
  const movie = await moviesCollection.findOne({ _id: new ObjectId(id) });
  if (movie === null) throw 'Error: No movie with that id';
  movie._id = movie._id.toString();
  return movie;
};

export const removeMovie = async (id) => {
  inputStringCheck(id, 'ID');
  id = id.trim();
  if (!ObjectId.isValid(id)) throw 'Error: invalid object ID';
  const moviesCollection = await movies();
  const deletionInfo = await moviesCollection.findOneAndDelete({
    _id: new ObjectId(id)
  });

  if (!deletionInfo) {
    throw `Error: Could not delete movie with id of ${id}`;
  }
  return `${deletionInfo.title} has been successfully deleted!`;
};

export const renameMovie = async (id, newName) => {
  inputStringCheck(id, 'ID');
  id = id.trim();
  let movieData = await getMovieById(id);
  //title
  inputStringCheck(newName, 'newName');
  if (newName.trim().length < 2 || !/^[a-zA-Z0-9\s]+$/.test(newName.trim())) throw "Error: Title must be at least two characters and can contain only letters and numbers. No special characters or punctuation";
  newName = newName.trim();
  if (movieData.title.toLowerCase() === newName.toLowerCase()) throw "Error: newName is the same as the current value";
  const moviesCollection = await movies();
  const { _id, ...updatedMovieData } = movieData;
  updatedMovieData.title = newName;
  const updatedInfo = await moviesCollection.findOneAndUpdate(
    {_id: new ObjectId(id)},
    {$set: updatedMovieData},
    {returnDocument: 'after'}
  );
  if (!updatedInfo) {
    throw 'Error: could not update movie successfully';
  }
  updatedInfo._id = updatedInfo._id.toString();
  return updatedInfo;
 };



 