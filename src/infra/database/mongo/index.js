const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    const remoteDB = process.env.DATABASE_URL.replace(
      "<PASSWORD>",
      process.env.DATABASE_PASSWORD
    );

    mongoose.connect(remoteDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

module.exports = new Database().connect();
