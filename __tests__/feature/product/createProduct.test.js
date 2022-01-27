const request = require('supertest');
const app = require('../../../src/app/app');

describe('create employee', () => {
  it('should returns status code 201 because a employee was created successfuly', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '88661202000',
      office: 'gerente',
      birthday: '22/09/1976'
    };

    const response = await request(app).post('/api/v1/employees').send(mockEmployee01);

    const { body } = response;

    expect(response.statusCode).toEqual(201);
    expect(body.employee_id).toBeDefined();
    expect(body.name).toBe('Ronaldo Nazário');
    expect(body.cpf).toBe('886.612.020-00');
    expect(body.office).toBe('gerente');
    expect(body.birthday).toBe('22/09/1976');
    expect(body.situation).toBe('activate');
    expect(body.createdAt).toBeDefined();
    expect(body.updatedAt).toBeDefined();
  });
});
