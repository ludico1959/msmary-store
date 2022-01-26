const { Router } = require('express');
const employee = require('./employee.router');
const product = require('./product.router');

module.exports = (server) => {
  server.use((req, res, next) => {
    employee(server, new Router());
    product(server, new Router());
    next();
  });
};
