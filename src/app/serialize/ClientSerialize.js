const DateFormat = require('../utils/DateFormat');

const serialize = ({ _id, name, cpf, office, birthday, situation, createdAt, updatedAt }) => {
  const formatedBirthday = DateFormat.formatToRequest(birthday);

  return {
    employee_id: _id,
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
  pageSize: docs.length,
  totalCount: totalDocs,
  totalPages
});

module.exports = { serialize, paginateSerialize };
