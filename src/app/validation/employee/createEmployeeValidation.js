const Joi = require('joi').extend(require('@joi/date'));
const BadRequest = require('../../errors/badRequest');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().trim().required(),

      cpf: Joi.string().length(11).required(),

      office: Joi.string().required().valid('gerente', 'vendedor', 'caixa'),

      birthday: Joi.date().format('DD/MM/YYYY').required().less(Date.now())
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });

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
