const EmployeeControler = require('../app/controller/EmployeeControler');

module.exports = (server, routes, prefix = '/api/v1/employees') => {
  routes.post('/', EmployeeControler.createEmployee);
  routes.get('/', EmployeeControler.findEmployee);
  routes.put('/:employee_id', EmployeeControler.updateEmployee);
  routes.delete('/:employee_id', EmployeeControler.deleteEmployee);
  server.use(prefix, routes);
};
