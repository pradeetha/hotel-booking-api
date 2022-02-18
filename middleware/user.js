const Joi = require('joi');
const {validateRequest} = require('../helper/index');



export const getUserByIdMiddleware = (req, res, next) => {
    const idSchema = Joi.object({
        id: Joi.string().uuid({
            version:['uuidv4']
        }).required()
    });
    validateRequest(idSchema, req, next);
};



export const putUserByIdMiddleware = (req, res, next) => {
    const updateUserSchema = Joi.object({
        firstName: Joi.string().empty(''),
        lastName: Joi.string().empty(''),
        dob: Joi.date().less('now').empty(''),
        gender: Joi.string().valid('M', 'F', 'other').empty(''),
        phone: Joi.string().length(10).pattern(/^[0-9]+$/).empty(''),
        email: Joi.string().email().empty(''),
        password: Joi.string().min(8).max(15).pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$')).empty('')
    });
    validateIdParamNBody(updateUserSchema, req, next);
};



export const postUserMiddleware = (req, res, next) => {
    const createUserSchema = Joi.object({
        firstName: Joi.string().required().empty(),
        lastName: Joi.string().required().empty(),
        dob: Joi.date().less('now').required().empty(),
        gender: Joi.string().valid('M', 'F', 'other').required(),
        phone: Joi.string().length(10).pattern(/^[0-9]+$/),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(15).pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$')).required()
    });
    validateRequest(createUserSchema, req, next);
};