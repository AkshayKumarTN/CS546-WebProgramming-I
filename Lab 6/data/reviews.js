//Export the following functions using ES6 Syntax
import helpers from '../helpers.js';
import { movies } from '../config/mongoCollections.js';
import { ObjectId } from 'mongodb';

export const createReview = async (
  movieId,
  reviewTitle,
  reviewerName,
  review,
  rating
) => {
  helpers.inputStringCheck(movieId, 'movieId');
  helpers.inputStringCheck(reviewTitle, 'reviewTitle');
  helpers.inputStringCheck(reviewerName, 'reviewerName');
  helpers.inputStringCheck(review, 'review');
  helpers.CheckReviewRating(rating);
  
  movieId = helpers.checkId(movieId);

  const moviesCollection = await movies();
  const movieData = await moviesCollection.findOne({ _id: new ObjectId(movieId) });
  if (movieData === null) throw 'Error: No movie with that id';

  // reviewDate
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const yyyy = today.getFullYear();
  const reviewDate = `${mm}/${dd}/${yyyy}`;

  const reviewData = {
    _id: new ObjectId(),
    reviewTitle: reviewTitle.trim(),
    reviewDate: reviewDate,
    reviewerName: reviewerName.trim(),
    review: review.trim(),
    rating: rating
  }

  const { _id, ...updatedMovieData } = movieData;

  updatedMovieData.reviews.push(reviewData);
  updatedMovieData.overallRating = await calculateOverallRating(updatedMovieData.reviews);

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

export const getAllReviews = async (movieId) => {
  movieId = helpers.checkId(movieId);
  const moviesCollection = await movies();
  const movieData = await moviesCollection.findOne({ _id: new ObjectId(movieId) });
  if (movieData === null) throw 'Error: No movie with that id';
  return movieData.reviews;
};

export const getReview = async (reviewId) => {
  reviewId = helpers.checkId(reviewId);
  const moviesCollection = await movies();
  const foundReview = await moviesCollection.findOne(
    {'reviews._id': new ObjectId(reviewId)},
    {projection: {_id: 0, 'reviews.$': 1}}
  );
  if (!foundReview) throw 'Error: Review Not found';
    return foundReview.reviews[0];
 };

 export const removeReview = async (reviewId) => {
  reviewId = helpers.checkId(reviewId);
  const moviesCollection = await movies();
  const foundMovie = await moviesCollection.findOne(
    {'reviews._id': new ObjectId(reviewId)},
  );
  if (!foundMovie) throw 'Error: Review Not found';

  const updatedReviews = foundMovie.reviews.filter(
    (review) => review._id.toString() !== reviewId
  );
  const { _id, ...updatedMovieData } = foundMovie;

  updatedMovieData.reviews = updatedReviews;
  updatedMovieData.overallRating = await calculateOverallRating(updatedMovieData.reviews);

  const updatedInfo = await moviesCollection.findOneAndUpdate(
    { _id: _id },
    { $set: updatedMovieData },
    { returnDocument: 'after' }
  );
  if (!updatedInfo) {
    throw 'Error: could not remove review successfully';
  }
  return updatedInfo;

 };


// calculateOverallRating..................

const calculateOverallRating = async (reviews) => {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return 0;
  }

  // Calculating the total rating
  let totalRating = 0;
  for (const review of reviews) {
    if (typeof review.rating === 'number') {
      totalRating += review.rating;
    }
  }

  // Calculating the average and round to 1 decimal place
  const avgRating = totalRating / reviews.length;
  return Math.round(avgRating * 10) / 10;
}


