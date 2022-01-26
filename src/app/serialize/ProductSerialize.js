const serialize = ({ _id, category, name, price, employee_id }) => ({
  product_id: _id,
  name,
  category,
  price,
  employee_id
});

const paginateSerialize = ({ docs, totalDocs, pagingCounter, totalPages }) => ({
  docs: docs.map(serialize),
  currentPage: pagingCounter,
  pageSize: docs.length,
  totalCount: totalDocs,
  totalPages
});

module.exports = { serialize, paginateSerialize };
