const employeeSchema = require('../schema/EmployeeSchema');

class EmployeeRepository {
  async createEmployee(payload) {
    const result = await employeeSchema.create(payload);

    return result;
  }

  async findEmployee(payload) {
    const result = await employeeSchema.find(payload);

    return result;
  }
}

module.exports = new EmployeeRepository();
