const { Router } = require('express');
const employee = require('./employee.router');
const product = require('./product.router');
const swagger = require('./swagger.router');

module.exports = (server) => {
  server.use((req, res, next) => {
    employee(server, new Router());
    product(server, new Router());
    swagger(server, new Router());
    next();
  });
};
