const express = require('express');
const router = express.Router();

const {getHotelRatingByIdMiddleware, putHotelRatingByIdMiddleware, postHotelRatingMiddleware} =require('../middleware/hotel-rating')

const {getAllHotelRating, getHotelRatingById, postHotelRating, putHotelRatingById} = require('../controllers/hotel-rating')

/**
 *  GET request all hotel rating listing.
 */
 router.get('/', getAllHotelRating);
  
  /**
   *  GET request hotel rating by hotelRatingId.
   */
  router.get('/:id', getHotelRatingByIdMiddleware, getHotelRatingById);
  
  /**
   *  PUT request to update hotel rating.
   */
  router.put('/:id', putHotelRatingByIdMiddleware, putHotelRatingById);  
  
  /**
   *  POST request to create new hotel rating.
   */
   router.post('/', postHotelRatingMiddleware, postHotelRating);


module.exports = router;
