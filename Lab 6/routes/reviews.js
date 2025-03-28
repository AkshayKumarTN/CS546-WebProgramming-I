//require express and express router as shown in lecture code
import helpers from '../helpers.js';
import * as reviewMethods from '../data/reviews.js';
import { Router } from 'express';

const router = Router();

router.route('/:movieId')
  .get(async (req, res) => {
    //code here for GET
    try {
      req.params.movieId = helpers.checkId(req.params.movieId);
    } catch (e) {
      return res.status(400).json(e);
    }
    try {
      const post = await reviewMethods.getAllReviews(req.params.movieId);
      return res.json(post);
    } catch (e) {
      return res.status(404).json(e);
    }
  })
  .post(async (req, res) => {
    //code here for POST
    let reviewInfo = req.body;
    if (!reviewInfo || Object.keys(reviewInfo).length === 0) {
      return res.status(400).json({ Error: 'There are no fields in the request body' });
    }
    try {
      //movieId
      req.params.movieId = helpers.checkId(req.params.movieId);
      helpers.inputStringCheck(reviewInfo.reviewTitle, 'reviewTitle');
      helpers.inputStringCheck(reviewInfo.reviewerName, 'reviewerName');
      helpers.inputStringCheck(reviewInfo.review, 'review');
      helpers.CheckReviewRating(reviewInfo.rating);
    } catch (e) {
      return res.status(400).json(e);
    }

    try {
      const MovieData = await reviewMethods.createReview(
        req.params.movieId,
        reviewInfo.reviewTitle,
        reviewInfo.reviewerName,
        reviewInfo.review,
        reviewInfo.rating
      );
      return res.json(MovieData);
    } catch (e) {
      return res.sendStatus(404).json(e);
    }

  });

router.route('/review/:reviewId')
  .get(async (req, res) => {
    //code here for GET
    try {
      req.params.reviewId = helpers.checkId(req.params.reviewId);
    } catch (e) {
      return res.status(400).json(e);
    }
    try {
      const reviewData = await reviewMethods.getReview(req.params.reviewId);
      return res.json(reviewData);
    } catch (e) {
      return res.status(404).json(e);
    }

  })
  .delete(async (req, res) => {
    //code here for DELETE
    try {
      req.params.reviewId = helpers.checkId(req.params.reviewId);
    } catch (e) {
      return res.status(400).json(e);
    }
    try {
      const reviewData = await reviewMethods.removeReview(req.params.reviewId);
      return res.json(reviewData);
    } catch (e) {
      return res.status(404).json(e);
    }
  });

export default router;