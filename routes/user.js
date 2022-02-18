const express = require('express');
const router = express.Router();

const {getUserByIdMiddleware, putUserByIdMiddleware, postUserMiddleware} = require('../middleware/user')

const {getAllUser, getUserById, postUser, putUserById} =require('../controllers/user')

/**
 *  GET request all users listing.
 */
router.get('/', getAllUser);

/**
 *  GET request user by userId.
 */
router.get('/:id', getUserByIdMiddleware, getUserById);

/**
 *  PUT request to update user.
 */
router.put('/:id', putUserByIdMiddleware, putUserById);  

/**
 *  POST request to create new user.
 */
 router.post('/', postUserMiddleware, postUser);

module.exports = router;