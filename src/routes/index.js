const { Router } = require("express");
const employee = require("./employee.router");

module.exports = (server) => {
  server.use((req, res, next) => {
    employee(server, new Router());
    next();
  });
};
