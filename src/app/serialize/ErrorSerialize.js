const serialize = (error) =>
  error.details.map((detail) => ({
    message: detail.message,
    details: [
      {
        description: detail.path.join('.')
      }
    ]
  }));

module.exports = serialize;
