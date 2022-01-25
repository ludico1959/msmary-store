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

const paginateSerialize = ({ docs, totalDocs, pagingCounter, totalPages }) => ({
  docs: docs.map(serialize),
  currentPage: pagingCounter,
  totalCount: totalDocs,
  totalPages
});

module.exports = { serialize, paginateSerialize };
