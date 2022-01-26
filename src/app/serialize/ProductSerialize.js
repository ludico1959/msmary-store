const serialize = ({ employee_id, category, name, min_price, max_price }) => ({
  employee_id,
  category,
  name,
  min_price,
  max_price
});

const paginateSerialize = ({ docs, totalDocs, pagingCounter, totalPages }) => ({
  docs: docs.map(serialize),
  currentPage: pagingCounter,
  pageSize: docs.length,
  totalCount: totalDocs,
  totalPages
});

module.exports = { serialize, paginateSerialize };
