const Joi = require('joi');
const BadRequest = require('../../errors/badRequest');

module.exports = async (req, res, next) => {
  try {
    const query = Joi.object({
      name: Joi.string().trim().optional(),

      cpf: Joi.string().length(11).optional(),

      office: Joi.string().optional().valid('gerente', 'vendedor', 'caixa')
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
