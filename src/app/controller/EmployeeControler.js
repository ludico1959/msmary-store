const EmployeeService = require('../service/EmployeeService');
const { serialize, paginateSerialize } = require('../serialize/ClientSerialize');

class EmployeeControler {
  async createEmployee(req, res) {
    try {
      const result = await EmployeeService.createEmployee(req.body);

      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new EmployeeControler();
