const Joi = require('joi');
const {
    validateRequest
} = require('../helper/index')

export const getBookingByIdMiddleware = (req, res, next) => {
    const idSchema = Joi.object({
        id: Joi.string().uuid({
            version: ['uuidv4']
        }).required()
    });
    validateRequest(idSchema, req, next);
};

export const putBookingByIdMiddleware = (req, res, next) => {
    const updateBookingSchema = Joi.object({
        checkIn: Joi.date().less('now').empty(''),
        checkOut:Joi.date().less('now').empty(''),
        numOfGuests: Joi.number().integer().max(6).empty(''),
        numOfRooms: Joi.number().integer().max(6).empty('')
    });
    validateIdParamNBody(updateBookingSchema, req, next);
}


export const postBookingMiddleware = (req, res, next) => {

    const createBookingSchema = Joi.object({
        checkIn: Joi.date().less('now').empty(''),
        checkOut:Joi.date().less('now').empty(''),
        numOfGuests: Joi.number().integer().max(6).empty(''),
        numOfRooms: Joi.number().integer().max(6).empty('')
    });
    validateRequest(createBookingSchema, req, next);
}