//import mongo collections, bcrypt and implement the following data functions
import helpers from '../helpers.js';
import { users } from '../config/mongoConnection.js';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';

export const getUserByUserId = async (userId) => {
  helpers.CheckUserId(userId);
  const usersCollection = await users();
  const user = await usersCollection.findOne({ userId: userId.trim() });
  return user;
};

export const register = async (
  firstName,
  lastName,
  userId,
  password,
  favoriteQuote,
  themePreference,
  role
) => {

  helpers.CheckName(firstName, 'firstName');
  helpers.CheckName(lastName, 'lastName');
  helpers.CheckUserId(userId);
  helpers.CheckPassword(password);
  helpers.CheckFavoriteQuote(favoriteQuote);
  helpers.CheckThemePreference(themePreference);
  helpers.CheckRole(role);

  // reviewDate
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const yyyy = today.getFullYear();
  const signupDate = `${mm}/${dd}/${yyyy}`;
  const saltRounds = 16;

  const hashPassword = await bcrypt.hash(password.trim(), saltRounds);

  const userData = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    userId: userId.trim().toLowerCase(),
    password: hashPassword,
    favoriteQuote: favoriteQuote.trim(),
    themePreference: themePreference,
    role: role.trim(),
    signupDate: signupDate,
    lastLogin: null
  };

  const userResult = await getUserByUserId(userData.userId);
  if (userResult === null) {
    const usersCollection = await users();
    const insertInfo = await usersCollection.insertOne(userData);
    if (!insertInfo.acknowledged || !insertInfo.insertedId) throw 'Error: Could not add User';
    const newId = insertInfo.insertedId.toString();
    const finalResult = await getUserByUserId(userData.userId);
    return finalResult;
  }
  else {
    throw `Error: A user with the userId '${userId}' already exists.`
  }

};

export const login = async (userId, password) => {
  helpers.CheckUserId(userId);
  helpers.CheckPassword(password);
  userId = userId.trim().toLowerCase()
  const finalResult = await getUserByUserId(userId);
  if (finalResult == null) throw "Either the userId or password is invalid";
  compareToMatch = await bcrypt.compare(password, hash);

  if (password !== finalResult.password) {

  }
  return finalResult;
};
