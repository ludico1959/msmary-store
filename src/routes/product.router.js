const ProductControler = require('../app/controller/ProductController');
const createProducteValidation = require('../app/validation/product/createProductValidation');
const findProducteValidation = require('../app/validation/product/findProductValidation');

module.exports = (server, routes, prefix = '/api/v1/products') => {
  routes.post('/', createProducteValidation, ProductControler.createProduct);
  routes.get('/', findProducteValidation, ProductControler.findProduct);
  server.use(prefix, routes);
};
