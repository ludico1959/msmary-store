class BadRequest extends Error {
  constructor(errorDescription) {
    super();
    this.statusCode = 404;
    this.description = errorDescription;
    this.message = 'Not found';
  }
}

module.exports = BadRequest;
