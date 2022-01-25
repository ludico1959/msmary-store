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

  async updateEmployee(id, payload) {
    const result = await EmployeeRepository.updateEmployee(id, payload);

    return result;
  }

  async deleteEmployee(id) {
    await EmployeeRepository.deleteEmployee(id);

    return null;
  }
}

module.exports = new EmployeeService();
