const InvalidCpf = require('../../app/errors/client/invalidCpf');

class CpfValidator {
  testCpf(strCPF) {
    const numbersCPF = strCPF.replace('.', '').replace('.', '').replace('-', '');

    let sum;
    let rest;
    sum = 0;
    if (numbersCPF === '00000000000') throw new InvalidCpf(strCPF);

    for (let i = 1; i <= 9; i++) sum += parseInt(numbersCPF.substring(i - 1, i), 10) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(numbersCPF.substring(9, 10), 10)) throw new InvalidCpf(strCPF);

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(numbersCPF.substring(i - 1, i), 10) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(numbersCPF.substring(10, 11), 10)) throw new InvalidCpf(strCPF);
  }
}

module.exports = new CpfValidator();
