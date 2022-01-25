const EmployeeService = require("../service/EmployeeService");

class EmployeeControler {
  async createEmployee(req, res) {
    try {
      const result = await EmployeeService.createEmployee(req.body);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new EmployeeControler();
