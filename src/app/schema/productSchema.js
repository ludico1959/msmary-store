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

  min_price: {
    type: Number,
    require: true,
    default: 0
  },

  max_price: {
    type: Number,
    require: true,
    default: 0
  },

  birthday: {
    type: Date,
    required: true
  },

  situation: {
    type: String,
    required: true,
    default: 'activate'
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },

  updatedAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

productSchema.plugin(mongoosePaginate);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
