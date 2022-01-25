const DateFormat = require("../utils/DateFormat");

const serialize = ({
  _id,
  name,
  cpf,
  office,
  birthday,
  situation,
  createdAt,
  UpdatedAt,
}) => {
  birthday = DateFormat.formatToRequest(birthday);

  return { _id, name, cpf, office, birthday, situation, createdAt, UpdatedAt };
};

const paginateSerialize = ({
  docs,
  limit,
  totalDocs,
  pageCounter,
  totalPages,
}) => {
  list: docs.map(serialize);
  limit;
  total: totalDocs;
  offset: pageCounter;
  offsets: totalPages;

  return { list, limit, total, offset, offsets };
};

module.exports = { serialize, paginateSerialize };