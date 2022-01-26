const ProductService = require('../service/ProductService');
const { serialize, paginateSerialize } = require('../serialize/ProductSerialize');

class ProductControler {
  async createProduct(req, res) {
    try {
      const result = await ProductService.createProduct(req.body);

      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(error.statusCode).json({
        message: error.message,
        details: {
          description: error.description
        }
      });
    }
  }

  async findProduct(req, res) {
    try {
      const result = await ProductService.findProduct(req.query);

      return res.status(200).json(paginateSerialize(result));
    } catch (error) {
      return res.status(error.statusCode).json({
        message: error.message,
        details: {
          description: error.description
        }
      });
    }
  }
}

module.exports = new ProductControler();
