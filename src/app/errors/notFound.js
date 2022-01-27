class NotFound extends Error {
  constructor(errorDescription) {
    super();
    this.statusCode = 404;
    this.description = errorDescription;
    this.message = 'Not Found';
  }
}

module.exports = NotFound;
