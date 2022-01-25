const EmployeeRepository = require("../repository/EmployeeRepository");

class EmployeeService {
  async createEmployee(payload) {
    const result = await EmployeeRepository(payload);

    return result;
  }
}

module.exports = new EmployeeService();
