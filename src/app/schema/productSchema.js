const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { randomUUID } = require('crypto');

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: randomUUID
  },

  employee_id: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    require: true
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

productSchema.plugin(mongoosePaginate);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
