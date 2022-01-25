class InvalidCpf extends Error {
  constructor(cpf) {
    super();
    this.statusCode = 400;
    this.description = 'Bad Request';
    this.message = `Invalid CPF ${cpf}`;
  }
}

module.exports = new InvalidCpf();
