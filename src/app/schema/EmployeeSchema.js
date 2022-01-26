const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { randomUUID } = require('crypto');

const employeeSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    default: randomUUID
  },

  name: {
    type: String,
    required: true
  },

  cpf: {
    type: String,
    unique: true,
    required: true
  },

  office: {
    type: String,
    require: true,
    enum: ['gerente', 'vendedor', 'caixa']
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
    type: Date
  }
});

employeeSchema.plugin(mongoosePaginate);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
