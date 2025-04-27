//import mongo collections, bcrypt and implement the following data functions
import helpers from '../helpers.js';
import { users } from '../config/mongoCollections.js';
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

  // Date
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const yyyy = today.getFullYear();
  const signupDate = `${mm}/${dd}/${yyyy}`;
  const saltRounds = 16;

  const hashPassword = await bcrypt.hash(password, saltRounds);

  const userData = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    userId: userId.trim().toLowerCase(),
    password: hashPassword,
    favoriteQuote: favoriteQuote.trim(),
    themePreference: themePreference,
    role: role.trim().toLowerCase(),
    signupDate: signupDate,
    lastLogin: null
  };

  const userResult = await getUserByUserId(userData.userId);
  if (userResult) {
    throw `A user with the userId '${userId}' already exists.`
  }
  const usersCollection = await users();
  const insertInfo = await usersCollection.insertOne(userData);
  if (!insertInfo.acknowledged || !insertInfo.insertedId) throw 'Could not add User';
  const finalResult = await getUserByUserId(userData.userId);
  if (finalResult) return { 'registrationCompleted': true };
  throw '500';
};

export const login = async (userId, password) => {
  helpers.CheckUserId(userId);
  helpers.CheckPassword(password);
  userId = userId.trim().toLowerCase()
  const finalResult = await getUserByUserId(userId);
  if (finalResult == null) throw "Either the userId or password is invalid";
  let compareToMatch = false;
  compareToMatch = await bcrypt.compare(password, finalResult.password);
  if (!compareToMatch) throw "Either the userId or password is invalid";
  const updateDone = await UpdateLastLogin(userId);
  if (!updateDone) throw '500';
  if (!finalResult.lastLogin) {
    const updatedResult = await getUserByUserId(userId);
    if (updatedResult == null) throw "Either the userId or password is invalid";
    const { password: _password, ...safeUserInfo } = updatedResult;
    return safeUserInfo;
  }
  const { password: _password, ...safeUserInfo } = finalResult;
  return safeUserInfo;

};


const UpdateLastLogin = async (userId) => {
  try {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}/${now.getFullYear()} ${String((hours % 12) || 12).padStart(2, '0')}:${String(minutes).padStart(2, '0')}${ampm}`;
    const usersCollection = await users();
    await usersCollection.updateOne({ userId }, { $set: { lastLogin: formattedTime } });
    return true;
  }
  catch (e) {
    throw '500';
  }

}
