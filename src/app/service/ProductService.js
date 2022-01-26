const ProductRepository = require('../repository/ProductRepository');
const validateEmployee = require('../validation/product/validateEmployee');
const BadRequest = require('../errors/badRequest');
const NotFound = require('../errors/notFound');

class ProductService {
  async createProduct(payload) {
    const isEmployeevalid = await validateEmployee.testID(payload.cpf);

    if (isEmployeevalid) throw new BadRequest(isEmployeevalid);

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
