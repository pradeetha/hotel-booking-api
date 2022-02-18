const Joi = require('joi');
const {validateRequest} = require('../helper/index')



export const getHotelByIdMiddleware = (req, res, next) => {
   
    const idSchema = Joi.object({
        id: Joi.string().uuid({
            version:['uuidv4']
        }).required()
    });
    validateRequest(idSchema, req, next);

};



export const putHotelByIdMiddleware = (req, res, next) => {
    
    const updateHotelSchema = Joi.object({
        name: Joi.string().empty(''),
        description:Joi.string().empty(''),
        location: Joi.string().empty(''),
        stars: Joi.string().valid('1', '2', '3', '4', '5', '6', '7').empty(''),
        hotelStyle: Joi.string().valid('OceanView', 'RiverView', 'CityView', 'LagoonView').empty(''),
        websiteURL: Joi.string().uri({
            scheme:[
                'http',
                'https'
            ]
        }).empty('')
    
    });

    validateIdParamNBody(updateHotelSchema, req, next);

};



export const postHotelMiddleware = (req, res, next ) => {

    const createHotelSchema = Joi.object({
        name: Joi.string().required(),
        description:Joi.string().required(),
        location: Joi.string().required(),
        stars: Joi.string().valid('1', '2', '3', '4', '5', '6', '7').required(),
        hotelStyle: Joi.string().valid('OceanView', 'RiverView', 'CityView', 'LagoonView').required(),
        websiteURL: Joi.string().uri({
            scheme:[
                'http',
                'https'
            ]
        }).required()
    
    });

    validateRequest(createHotelSchema, req, next);
};