const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { randomUUID } = require('crypto');
const { employeeOfficeOptions, employeeSituationOptions } = require('../utils/Enums');

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
    enum: employeeOfficeOptions
  },

  birthday: {
    type: Date,
    required: true
  },

  situation: {
    type: String,
    required: true,
    enum: employeeSituationOptions,
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

employeeSchema.plugin(mongoosePaginate);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
