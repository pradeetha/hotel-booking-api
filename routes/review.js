const express = require('express');
const router = express.Router();

const {getReviewByIdMiddleware, postReviewMiddleware, putReviewByIdMiddleware} = require('../middleware/review')

const {getAllReview, getReviewById, putReviewById, postReview} = require('../controllers/review')

/**
 *  GET request all review listing.
 */
 router.get('/', getAllReview);
  
  /**
   *  GET request review by reviewId.
   */
  router.get('/:id', getReviewByIdMiddleware, getReviewById);
  
  /**
   *  PUT request to update review.
   */
  router.put('/:id', putReviewByIdMiddleware, putReviewById);  
  
  /**
   *  POST request to create new review.
   */
   router.post('/', postReviewMiddleware, postReview);

module.exports = router;