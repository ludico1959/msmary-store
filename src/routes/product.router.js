const ProductControler = require('../app/controller/ProductController');

module.exports = (server, routes, prefix = '/api/v1/products') => {
  routes.post('/', ProductControler.createProduct);
  routes.get('/', ProductControler.findProduct);
  server.use(prefix, routes);
};
