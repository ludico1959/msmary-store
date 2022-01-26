const FormatCPF = require('../utils/FormatCPF');
const FormatDate = require('../utils/FormatDate');

const serialize = ({ _id, name, cpf, office, birthday, situation, createdAt, updatedAt }) => {
  const formatedBirthday = FormatDate.formatToRequest(birthday);
  const formatedCPF = FormatCPF.formatToRequest(cpf);

  return {
    employee_id: _id,
    name,
    cpf: formatedCPF,
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
