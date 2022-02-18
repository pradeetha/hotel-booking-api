const express = require('express');
const router = express.Router();

const {postBookingMiddleware, putBookingByIdMiddleware, getBookingByIdMiddleware } = require('../middleware/booking');

const {getAllBooking, getBookingById, postBooking, putBookingById, deleteBookingById} = require('../controllers/booking');

/**
 *  GET request all bookings listing.
 */
router.get('/', getAllBooking);

/**
 *  GET request booking by BookingId.
 */
router.get('/:id', getBookingByIdMiddleware, getBookingById);

/**
 *  PUT request to update booking.
 */
router.put('/:id', putBookingByIdMiddleware, putBookingById);  

/**
 *  POST request to create new booking.
 */
 router.post('/', postBookingMiddleware, postBooking);

 /**
 *  PUT request to update booking.
 */
router.delete('/:id', getBookingByIdMiddleware, deleteBookingById);  

module.exports = router;