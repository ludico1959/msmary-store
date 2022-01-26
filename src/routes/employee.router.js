const EmployeeControler = require('../app/controller/EmployeeControler');
const createEmployeeValidation = require('../app/validation/employee/createEmployeeValidation');
const updateEmployeeValidation = require('../app/validation/employee/updateEmployeeValidation');
const deleteEmployeeValidation = require('../app/validation/employee/deleteEmployeeValidation');

module.exports = (server, routes, prefix = '/api/v1/employees') => {
  routes.post('/', createEmployeeValidation, EmployeeControler.createEmployee);
  routes.get('/', EmployeeControler.findEmployee);
  routes.put('/:employee_id', updateEmployeeValidation, EmployeeControler.updateEmployee);
  routes.delete('/:employee_id', deleteEmployeeValidation, EmployeeControler.deleteEmployee);
  server.use(prefix, routes);
};
