const Joi = require('joi');
const BadRequest = require('../../errors/badRequest');

module.exports = async (req, res, next) => {
  try {
    const query = Joi.object({
      name: Joi.string().trim().optional(),

      min_price: Joi.number().optional(),

      max_price: Joi.number().optional()
    });

    const { error } = query.validate(req.query, { abortEarly: false });

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
