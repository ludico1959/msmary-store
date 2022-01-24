require("dotenv").config();
const express = require("express");

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
