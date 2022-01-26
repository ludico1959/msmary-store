const ProductControler = require('../app/controller/ProductController');
const createProducteValidation = require('../app/validation/product/createProductValidation');

module.exports = (server, routes, prefix = '/api/v1/products') => {
  routes.post('/', createProducteValidation, ProductControler.createProduct);
  routes.get('/', ProductControler.findProduct);
  server.use(prefix, routes);
};
