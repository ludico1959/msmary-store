const cpfValidator = require('../../validation/client/cpfValidator');
const EmployeeRepository = require('../repository/EmployeeRepository');

class EmployeeService {
  async createEmployee(payload) {
    cpfValidator.testCpf(payload.cpf);

    const result = await EmployeeRepository.createEmployee(payload);

    return result;
  }

  async findEmployee(payload) {
    const result = await EmployeeRepository.findEmployee(payload);

    return result;
  }
}

module.exports = new EmployeeService();
