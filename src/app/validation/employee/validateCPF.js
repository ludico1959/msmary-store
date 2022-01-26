const EmployeeSchema = require('../../schema/EmployeeSchema');

class ValidateCPF {
  async testCPF(strCPF) {
    const numbersCPF = strCPF.replace('.', '').replace('.', '').replace('-', '');

    let sum;
    let rest;
    sum = 0;
    if (numbersCPF === '00000000000') return 'Invalid CPF format';

    for (let i = 1; i <= 9; i++) sum += parseInt(numbersCPF.substring(i - 1, i), 10) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(numbersCPF.substring(9, 10), 10)) return 'Invalid CPF format';

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(numbersCPF.substring(i - 1, i), 10) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(numbersCPF.substring(10, 11), 10)) return 'Invalid CPF format';

    const duplicatedCPF = await EmployeeSchema.find({ cpf: strCPF });

    if (duplicatedCPF.length > 0) return 'Duplicated CPF';

    return null;
  }
}

module.exports = new ValidateCPF();
