const express = require('express');
const router = express.Router();

const userRouter = require('./user');
const hotelRouter = require('./hotel');
const hotelRatingRouter = require('./hotel-rating');
const reviewRouter = require('./review');
const bookingRouter = require('./booking');



router.use('/user', userRouter);

router.use('/hotel', hotelRouter);

router.use('/hotel-rating', hotelRatingRouter);

router.use('/review', reviewRouter);

router.use('/booking', bookingRouter);


module.exports = router;