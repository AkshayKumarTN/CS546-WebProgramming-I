//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.
import { ObjectId } from 'mongodb';

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
  validateDate(dateString, fieldName) {
    if (!(/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/).test(dateString.trim())) throw `Error: '${fieldName}' is invalid. It must be in mm/dd/yyyy format.`;
    let [month, day, year] = dateString.trim().split('/').map(Number);
    if (isNaN(month) || isNaN(day) || isNaN(year)) throw `Error: ${fieldName} - Invalid date format. Please use MM/DD/YYYY.`;
    if (!(month <= 12 && month >= 1)) throw `Error: ${fieldName} - Invalid month. Month must fall between 1 and 12`;
    const maxDaysinMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (!(day >= 1 && day <= maxDaysinMonth[month - 1])) throw `Error: ${fieldName} - Invalid day for the given month.`;
    if (year < 1900 || year > (new Date().getFullYear() + 2)) throw `Error: ${fieldName} - Year must be between 1900 and ${(new Date().getFullYear() + 2)}`;
  },
  validateRunTime(runTimeString) {
    runTimeString = runTimeString.trim();
    let runtimeRegex = /^(\d+)h (\d{1,2})min$/;
    if (!(runTimeString.match(runtimeRegex))) throw `Error: Runtime must be in the following format "#h #min". Both #'s must be a positive whole number.`;
    const hrs = parseInt((runTimeString.match(runtimeRegex))[1], 10);
    const mins = parseInt((runTimeString.match(runtimeRegex))[2], 10);
    // const [spcitalChar, hrs, mins] = (runTimeString.match(runtimeRegex)).map(Number);
    if (!((hrs > 0 && mins >= 0 && mins < 60) || (hrs == 0 && mins > 30 && mins < 60))) throw `Error: Runtime #min must be 0 to 59 and Runtime should be minimum of at least 0h 31min.`;
  },
  
  // Id Check...............
  checkId(id) {
    this.inputStringCheck(id, 'ID');
    id = id.trim();
    if (!ObjectId.isValid(id)) throw 'Error: invalid object ID';
    return id;
  },

  // Movie....................
  CheckTitle(title) {
    this.inputStringCheck(title, 'title');
    if (title.trim().length < 2 || !/^[a-zA-Z0-9\s]+$/.test(title.trim())) throw "Error: Title must be at least two characters and can contain only letters and numbers. No special characters or punctuation";
  },

  CheckGenres(genres) {
    if (!genres) throw 'Error: genres fields need to have valid values';
    if (!Array.isArray(genres) || genres == undefined || genres.length == 0 || !genres.every(item => typeof item === "string" && item.trim().length >= 5 && /^[a-zA-Z\s]+$/.test(item.trim()) && !item.trim().includes('  '))) throw 'Error: genres must be an array of strings, each at least 5 characters long and containing only letters.';
  },

  CheckRating(rating) {
    this.inputStringCheck(rating, 'rating');
    if (!["G", "PG", "PG-13", "R", "NC-17"].includes(rating.trim())) throw "Error: Invalid rating";
  },
  CheckStudio(studio) {
    this.inputStringCheck(studio, 'studio');
    if (studio.trim().length < 5 || !/^[a-zA-Z\s]+$/.test(studio.trim())) throw "Error: studio must be at least 5 characters long and only letters a-z or A-Z. No numbers or special characters.";
  },
  CheckDirector(director) {
    this.inputStringCheck(director, 'director');
    let splitDirector = director.trim().split(' ')
    if (splitDirector.length !== 2) throw "Error: director must be following format 'first name space last name'.";
    if (!(/^[a-zA-Z]{3,}$/.test(splitDirector[0].trim()) && /^[a-zA-Z]{3,}$/.test(splitDirector[1].trim()))) throw "Error: director must be first name and last name with at least 3 characters each and only letters a-z or A-Z.";
  },
  CheckCastMembers(castMembers){
    if (!castMembers) throw 'Error: castMembers fields need to have valid values';
  if (!Array.isArray(castMembers) || castMembers == undefined || castMembers.length == 0 || !castMembers.every(item => typeof item === "string" && item.trim().length >= 7 && /^[a-zA-Z]{3,} [a-zA-Z]{3,}$/.test(item.trim()) && !item.trim().includes('  '))) throw 'Error: castMembers must be an array of strings, must have the following format "first name space last name" and first name and last name must be at least 3 characters each and only letters a-z or A-Z. No numbers or special characters.';
  
  },

  // review........................
  CheckReviewRating(rating){
    if (typeof rating !== 'number' || rating < 1 || rating > 5 || Math.round(rating * 10) / 10 !== rating) throw 'Error: rating must be a number between 1 and 5, with no more than one decimal place.';
  }

}

export default exportedMethods;