const EmployeeService = require('../service/EmployeeService');
const { serialize, paginateSerialize } = require('../serialize/EmployeeSerialize');

class EmployeeControler {
  async createEmployee(req, res) {
    try {
      const result = await EmployeeService.createEmployee(req.body);

      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(error.statusCode).json({
        message: error.message,
        details: {
          description: error.description
        }
      });
    }
  }

  async findEmployee(req, res) {
    try {
      const result = await EmployeeService.findEmployee(req.query);

      return res.status(200).json(paginateSerialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async updateEmployee(req, res) {
    try {
      const result = await EmployeeService.updateEmployee(req.params.employee_id, req.body);

      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async deleteEmployee(req, res) {
    try {
      await EmployeeService.deleteEmployee(req.params.employee_id);

      return res.status(204).end();
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new EmployeeControler();
