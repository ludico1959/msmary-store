class InvalidCPF extends Error {
  constructor(errorMessage) {
    super();
    this.statusCode = 400;
    this.description = 'Bad Request';
    this.message = errorMessage;
  }
}

module.exports = InvalidCPF;
