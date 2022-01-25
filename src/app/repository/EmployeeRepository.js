const employeeSchema = require('../schema/EmployeeSchema');

class EmployeeRepository {
  async createEmployee(payload) {
    const result = await employeeSchema.create(payload);

    return result;
  }

  async findEmployee(payload) {
    const { page = 1, limit = 20, ...query } = payload;

    const search = payload.name ? { name: { $regex: query.name, $options: 'i' } } : { ...query };

    return employeeSchema.paginate(search, {
      limit: Number(limit),
      page: Number(page),
      skip: (Number(page) - 1) * Number(limit)
    });
  }

  async updateEmployee(id, payload) {
    const result = await employeeSchema.findByIdAndUpdate(id, payload);

    return result;
  }
}

module.exports = new EmployeeRepository();
