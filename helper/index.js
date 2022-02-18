

export const validateRequest = ( schema, req, next) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        
        const message = error.details.map(i => i.message).join(',');
        res.status(422).json({ error: message }); 

    } else {
        req.body = value;
        next();
    }
}

export const validateIdParamNBody = ( bodySchema, req, next) =>{
    
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };

    const idSchema = Joi.object({
        id: Joi.string().uuid({
            version:['uuidv4']
        }).required()
    }); 

    const {error, value} = idSchema.validate(req.params[0], options);

    const paramsResults = idSchema.validate(req.params[0] ,options)
    if (paramsResults.error) {
        const message = error.details.map(i => i.message).join(',');
        res.status(422).json({ error: message }); 
    }
    else{
    validateRequest(bodySchema, req, next);
    }
} 
