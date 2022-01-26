const EmployeeRepository = require('../repository/EmployeeRepository');
const FormatDate = require('../utils/FormatDate');
const validateCPF = require('../validation/employee/validateCPF');
const BadRequest = require('../errors/badRequest');
const NotFound = require('../errors/notFound');

class EmployeeService {
  async createEmployee(payload) {
    const isCPFincorrect = await validateCPF.testCPF(payload.cpf);

    if (isCPFincorrect) throw new BadRequest(isCPFincorrect);

    const payloadWithDateFormated = payload;

    payloadWithDateFormated.birthday = FormatDate.formatToDatabase(payload.birthday);

    const result = await EmployeeRepository.createEmployee(payloadWithDateFormated);

    return result;
  }

  async findEmployee(payload) {
    const result = await EmployeeRepository.findEmployee(payload);

    if (result.docs.length === 0) throw new NotFound('Results not found');

    return result;
  }

  async updateEmployee(id, payload) {
    const isThereEmployeeID = await EmployeeRepository.findEmployee({ _id: id });

    if (!isThereEmployeeID) throw new NotFound('ID not found');

    const result = await EmployeeRepository.updateEmployee(id, payload);

    return result;
  }

  async deleteEmployee(id) {
    const isThereEmployeeID = await EmployeeRepository.findEmployee({ _id: id });

    if (!isThereEmployeeID) throw new NotFound('ID not found');

    await EmployeeRepository.deleteEmployee(id);

    return null;
  }
}

module.exports = new EmployeeService();
