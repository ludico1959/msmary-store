const Joi = require('joi');
const BadRequest = require('../../errors/badRequest');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().trim(),

      office: Joi.string().valid('gerente', 'vendedor', 'caixa'),

      situation: Joi.string().valid('activate', 'deactivate')
    });

    const params = Joi.object({
      employee_id: Joi.string().uuid().required()
    });

    let { error } = schema.validate(req.body, { abortEarly: false });
    if (error) throw new BadRequest(error.message);

    ({ error } = params.validate(req.params, { abortEarly: false }));
    if (error) throw new BadRequest(error.message);

    return next;
  } catch (error) {
    return res.status(error.statusCode).json({
      message: error.message,
      details: {
        description: error.description
      }
    });
  }
};
