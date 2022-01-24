require("dotenv").config();
const express = require("express");
require("../infra/database/mongo");

class AppController {
  constructor() {
    this.server = express();
    this.middlewares();
  }

  middlewares() {
    this.server.use(express.json());
  }
}

module.exports = new AppController().server;
