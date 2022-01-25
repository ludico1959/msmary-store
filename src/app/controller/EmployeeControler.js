const EmployeeService = require("../service/EmployeeService");

class EmployeeControler {
  async createEmployee(req, res) {
    try {
      const result = await EmployeeService.createEmployee(req.body);

      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new EmployeeControler();
