const Joi = require('joi');
const BadRequest = require('../../errors/badRequest');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().trim().required(),

      category: Joi.string().required(),

      price: Joi.string()
        .required()
        .regex(/^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/),

      employee_id: Joi.string().uuid().required()
    });

    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) throw new BadRequest(error.message);

    return next();
  } catch (error) {
    return res.status(error.statusCode).json({
      message: error.message,
      details: {
        description: error.description
      }
    });
  }
};
