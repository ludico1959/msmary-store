const DateFormat = require('../utils/DateFormat');

const serialize = ({ _id, name, cpf, office, birthday, situation, createdAt, updatedAt }) => {
  const formatedBirthday = DateFormat.formatToRequest(birthday);

  return {
    _id,
    name,
    cpf,
    office,
    birthday: formatedBirthday,
    situation,
    createdAt,
    updatedAt
  };
};

const paginateSerialize = ({ docs, limit, totalDocs, pageCounter, totalPages }) => ({
  docs: docs.map(serialize),
  limit,
  total: totalDocs,
  offset: pageCounter,
  offsets: totalPages
});

module.exports = { serialize, paginateSerialize };
