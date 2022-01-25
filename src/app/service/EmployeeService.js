const validateCPF = require('../validation/client/validateCPF');
const EmployeeRepository = require('../repository/EmployeeRepository');
const InvalidCPF = require('../errors/client/invalidCPF');

class EmployeeService {
  async createEmployee(payload) {
    const isCPFincorrect = await validateCPF.testCPF(payload.cpf);

    if (isCPFincorrect) throw new InvalidCPF(isCPFincorrect);

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
