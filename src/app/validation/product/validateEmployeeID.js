const EmployeeSchema = require('../../schema/EmployeeSchema');

class ValidateEmployeeID {
  async testID(employee_id) {
    const getEmployee = await EmployeeSchema.find({ _id: employee_id });
    if (!getEmployee) return 'Employee ID not found';

    if (getEmployee.situation === 'deactivate') return 'Employee is not activate';

    return null;
  }
}

module.exports = new ValidateEmployeeID();
