const employeeSchema = require("../schema/EmployeeSchema");

class EmployeeRepository {
  async createEmployee(payload) {
    const result = await employeeSchema.create(payload);

    return result;
  }
}

module.exports = new EmployeeRepository();
