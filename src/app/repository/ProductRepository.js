const productSchema = require('../schema/ProductSchema');

class ProductRepository {
  async createProduct(payload) {
    const result = await productSchema.create(payload);

    return result;
  }

  async findProduct(payload) {
    const { page = 1, limit = 20, min_price = 0, max_price = Infinity, name } = payload;

    const search = {
      price: { $gte: min_price, $lte: max_price }
    };

    const searchByName = { name: { $regex: name, $options: 'i' } };
    if (name) Object.assign(search, searchByName);

    return productSchema.paginate(search, {
      limit: Number(limit),
      page: Number(page),
      skip: (Number(page) - 1) * Number(limit)
    });
  }
}

module.exports = new ProductRepository();
