const request = require('supertest');
const app = require('../../../src/app/app');

describe('update employee', () => {
  it('should returns status code 204 and update an employee successfuly', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '88661202000',
      office: 'caixa',
      birthday: '22/09/1976'
    };

    let response = await request(app).post('/api/v1/employees').send(mockEmployee01);

    const { employee_id } = response.body;

    response = await request(app).delete(`/api/v1/employees/${employee_id}`);

    expect(response.statusCode).toEqual(204);
  });

  it('should returns status code 404 because the ID was not found', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '88661202000',
      office: 'caixa',
      birthday: '22/09/1976'
    };

    await request(app).post('/api/v1/employees').send(mockEmployee01);

    employee_id = '5ed5fa1e-0525-43c0-80f0-19c1b1f36db8';

    const response = await request(app).delete(`/api/v1/employees/${employee_id}`);

    const { body } = response;

    expect(response.statusCode).toEqual(404);
    expect(body.message).toBe('Not Found');
    expect(body.details.description).toBe('ID not found');
  });

  it('should returns status code 400 because ID format is not an UUID', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '88661202000',
      office: 'caixa',
      birthday: '22/09/1976'
    };

    const mockUpdates = {
      name: 'Ronaldo de Assis Moreira',
      office: 'repositor',
      situation: 'deactivate'
    };

    await request(app).post('/api/v1/employees').send(mockEmployee01);

    const employee_id = '123';

    const response = await request(app).delete(`/api/v1/employees/${employee_id}`).send(mockUpdates);

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBeDefined();
  });
});
