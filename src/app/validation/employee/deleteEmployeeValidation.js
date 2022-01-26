const Joi = require('joi');
const BadRequest = require('../../errors/badRequest');

module.exports = async (req, res, next) => {
  try {
    const params = Joi.object({
      employee_id: Joi.string().uuid().required()
    });

    const { error } = params.validate(req.params, { abortEarly: false });
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
