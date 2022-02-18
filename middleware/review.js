import { param } from 'express/lib/request';

const Joi = require('joi');
const {validateRequest} = require('../helper/index');


export const getReviewByIdMiddleware = (req, res, next) => {

    const idSchema = Joi.object({
        id: Joi.string().uuid({
            version:['uuidv4']
        }).required()
    });
    validateRequest(idSchema, req, next);

};


export const putReviewByIdMiddleware = (req, res, next) => {
   
    const updateReviewSchema = Joi.object({
        description: Joi.string().required(),
    });
    validateIdParamNBody(updateReviewSchema, req, next);
};



export const postReviewMiddleware = (req, res, next) => {
    
    const createReviewSchema = Joi.object({
        userId: Joi.string().uuid({
            version:['uuidv4']
        }).required(),
        hotelId: Joi.string().uuid({
            version:['uuidv4']
        }).required(),
        description: Joi.string().required(),
    });

    validateRequest(createReviewSchema, req, next);

};