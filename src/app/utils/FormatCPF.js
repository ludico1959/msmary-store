class FormatCPF {
  formatToRequest(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}

module.exports = new FormatCPF();
