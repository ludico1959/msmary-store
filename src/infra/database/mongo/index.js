const mongoose = require('mongoose');
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    const remoteDB = process.env.DATABASE_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

    mongoose.connect(remoteDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false
    });
  }
}

module.exports = new Database().connect();
