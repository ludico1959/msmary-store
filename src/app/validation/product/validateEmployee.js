const EmployeeSchema = require('../../schema/EmployeeSchema');

class ValidateEmployee {
  async checkEmployee(employee_id) {
    const getEmployee = await EmployeeSchema.find({ _id: employee_id });
    if (getEmployee.length === 0) return 'Employee ID not found';

    if (getEmployee[0]._doc.office !== 'gerente') return 'Employee is not a manager';
    if (getEmployee[0]._doc.situation === 'deactivate') return 'Employee is not activate';

    return null;
  }
}

module.exports = new ValidateEmployee();
