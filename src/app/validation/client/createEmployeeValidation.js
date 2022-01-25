const Joi = require('joi').extend(require('@joi/date'));
const errorSerialize = require('../../serialize/ErrorSerialize');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      name: Joi.string().trim().required(),

      cpf: Joi.string().length(11).required(),

      office: Joi.string().required().valid('gerente', 'vendedor', 'caixa'),

      birthday: Joi.date().format('DD/MM/YYYY').required().less(Date.now())
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });

    if (error) throw error;

    return next;
  } catch (error) {
    return res.status(400).json(errorSerialize(error));
  }
};
