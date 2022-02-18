const express = require('express');
const router = express.Router();

const {getHotelByIdMiddleware, putHotelByIdMiddleware, postHotelMiddleware} = require('../middleware/hotel')

const {getAllHotel, getHotelById, putHotelById, postHotel} = require('../controllers/hotel')

/**
 *  GET request all hotel listing.
 */
 router.get('/', getAllHotel);
  
  /**
   *  GET request hotel by hotelId.
   */
  router.get('/:id', getHotelByIdMiddleware, getHotelById);
  
  /**
   *  PUT request to update hotel.
   */
  router.put('/:id', putHotelByIdMiddleware, putHotelById);  
  
  /**
   *  POST request to create new hotel.
   */
   router.post('/', postHotelMiddleware, postHotel);

module.exports = router;