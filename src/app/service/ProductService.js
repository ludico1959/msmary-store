const ProductRepository = require('../repository/ProductRepository');
const BadRequest = require('../errors/badRequest');
const NotFound = require('../errors/notFound');

class ProductService {
  async createProduct(payload) {
    // const isEmployeeIDvalid = await validateProductID.testID(payload.cpf);

    // if (isEmployeeIDvalid) throw new BadRequest(isEmployeeIDvalid);

    const result = await ProductRepository.createProduct(payload);

    return result;
  }

  async findProduct(payload) {
    const result = await ProductRepository.findProduct(payload);

    if (result.docs.length === 0) throw new NotFound('Results not found');

    return result;
  }
}

module.exports = new ProductService();
