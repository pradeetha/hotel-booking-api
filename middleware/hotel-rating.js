const Joi = require('joi');
const {
    validateRequest
} = require('../helper/index');



export const getHotelRatingByIdMiddleware = (req, res, next) => {
    
    const idSchema = Joi.object({
        id: Joi.string().uuid({
            version: ['uuidv4']
        }).required()
    });

    validateRequest(idSchema, req, next);
};



export const putHotelRatingByIdMiddleware = (req, res, next) => {
   
    const updateHotelRatingSchema = Joi.object({
        rating: Joi.string().valid('1', '2', '3', '4', '5').empty(''),
        location: Joi.string().valid('1', '2', '3', '4', '5').empty(''),
        cleanliness: Joi.string().valid('1', '2', '3', '4', '5').empty(''),
        service: Joi.string().valid('1', '2', '3', '4', '5').empty(''),
        value: Joi.string().valid('1', '2', '3', '4', '5').empty('')
    });

    validateIdParamNBody(updateHotelRatingSchema, req, next);
};



export const postHotelRatingMiddleware = (req, res, next) => {

    const createHotelRatingSchema = Joi.object({
        userId: Joi.string().uuid({
            version:['uuidv4']
        }).required(),
        hotelId: Joi.string().uuid({
            version:['uuidv4']
        }).required(),
        rating: Joi.string().valid('1', '2', '3', '4', '5').required(),
        location: Joi.string().valid('1', '2', '3', '4', '5').required(),
        cleanliness: Joi.string().valid('1', '2', '3', '4', '5').required(),
        service: Joi.string().valid('1', '2', '3', '4', '5').required(),
        value: Joi.string().valid('1', '2', '3', '4', '5').required()
    });

    validateRequest(createHotelRatingSchema, req, next);
};