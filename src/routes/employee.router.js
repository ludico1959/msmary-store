const EmployeeControler = require("../app/controller/EmployeeControler");

module.exports = (server, routes, prefix = "/api/v1/employees") => {
  routes.post("/", EmployeeControler.createEmployee);
  server.use(prefix, routes);
};
