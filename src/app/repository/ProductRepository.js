const productSchema = require('../schema/productSchema');

class EmployeeRepository {
  async createEmployee(payload) {
    const result = await productSchema.create(payload);

    return result;
  }

  async findEmployee(payload) {
    const { page = 1, limit = 20, ...query } = payload;

    const search = payload.name ? { name: { $regex: query.name, $options: 'i' } } : { ...query };

    return productSchema.paginate(search, {
      limit: Number(limit),
      page: Number(page),
      skip: (Number(page) - 1) * Number(limit)
    });
  }
}

module.exports = new EmployeeRepository();
