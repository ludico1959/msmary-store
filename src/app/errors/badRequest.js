class BadRequest extends Error {
  constructor(errorDescription) {
    super();
    this.statusCode = 400;
    this.description = errorDescription;
    this.message = 'Bad Request';
  }
}

module.exports = BadRequest;
