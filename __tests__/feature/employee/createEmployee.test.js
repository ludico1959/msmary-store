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

  it('should returns status code 400 because CPF has invalid format #1', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '00000000000',
      office: 'gerente',
      birthday: '22/09/1976'
    };

    const response = await request(app).post('/api/v1/employees').send(mockEmployee01);

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBe('Invalid CPF format');
  });

  it('should returns status code 400 because CPF has invalid format #2', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '12345678912',
      office: 'gerente',
      birthday: '22/09/1976'
    };

    const response = await request(app).post('/api/v1/employees').send(mockEmployee01);

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBe('Invalid CPF format');
  });

  it('should returns status code 400 because CPF has invalid format #3', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '12345678908',
      office: 'gerente',
      birthday: '22/09/1976'
    };

    const response = await request(app).post('/api/v1/employees').send(mockEmployee01);

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBe('Invalid CPF format');
  });

  it('should returns status code 400 because CPF is duplicated', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '26421419003',
      office: 'gerente',
      birthday: '22/09/1976'
    };

    const mockEmployee02 = {
      name: 'Zlatan Ibrahimović',
      cpf: '26421419003',
      office: 'gerente',
      birthday: '03/10/1981'
    };

    await request(app).post('/api/v1/employees').send(mockEmployee01);

    const response = await request(app).post('/api/v1/employees').send(mockEmployee02);

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBe('Duplicated CPF');
  });

  it('should returns status code 400 because "faxineiro" is not a valid office option', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '12345678908',
      office: 'faxineiro',
      birthday: '22/09/1976'
    };

    const response = await request(app).post('/api/v1/employees').send(mockEmployee01);

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBeDefined();
  });
});
