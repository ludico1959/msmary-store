const InvalidCpf = require('../../app/errors/client/invalidCpf');

class CpfUtils {
  testCpf(strCPF) {
    const numbersCPF = strCPF.replace('.', '').replace('.', '').replace('-', '');

    let Soma;
    let Resto;
    Soma = 0;
    if (numbersCPF === '00000000000') throw new InvalidCpf(strCPF);

    for (let i = 1; i <= 9; i++) Soma += parseInt(numbersCPF.substring(i - 1, i), 10) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(numbersCPF.substring(9, 10), 10)) throw new InvalidCpf(strCPF);

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma += parseInt(numbersCPF.substring(i - 1, i), 10) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(numbersCPF.substring(10, 11), 10)) throw new InvalidCpf(strCPF);
  }
}

module.exports = new CpfUtils();
