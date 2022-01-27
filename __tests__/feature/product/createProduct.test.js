const request = require('supertest');
const app = require('../../../src/app/app');

describe('create employee', () => {
  it('should returns status code 201 because a product was created successfuly', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '88661202000',
      office: 'gerente',
      birthday: '22/09/1976'
    };

    let response = await request(app).post('/api/v1/employees').send(mockEmployee01);

    const { employee_id } = await response.body;

    const mockProduct01 = {
      name: 'Chuteira Nike',
      category: 'calçado',
      price: '999.99',
      employee_id
    };

    response = await request(app).post('/api/v1/products').send(mockProduct01);

    const { body } = response;

    expect(response.statusCode).toEqual(201);
    expect(body.product_id).toBeDefined();
    expect(body.name).toBe('Chuteira Nike');
    expect(body.category).toBe('calçado');
    expect(body.price).toBe(999.99);
    expect(body.employee_id).toBe(employee_id);
  });

  it('should returns status code 400 because employee ID does not exists', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '88661202000',
      office: 'gerente',
      birthday: '22/09/1976'
    };

    await request(app).post('/api/v1/employees').send(mockEmployee01);

    const mockProduct01 = {
      name: 'Chuteira Nike',
      category: 'calçado',
      price: '999.99',
      employee_id: '5ed5fa1e-0525-43c0-80f0-19c1b1f36db8'
    };

    const response = await request(app).post('/api/v1/products').send(mockProduct01);

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBe('Employee ID not found');
  });

  it('should returns status code 400 because employee is not a manager (gerente)', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '88661202000',
      office: 'caixa',
      birthday: '22/09/1976'
    };

    let response = await request(app).post('/api/v1/employees').send(mockEmployee01);

    const { employee_id } = await response.body;

    const mockProduct01 = {
      name: 'Chuteira Nike',
      category: 'calçado',
      price: '999.99',
      employee_id
    };

    response = await request(app).post('/api/v1/products').send(mockProduct01);

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBe('Employee is not a manager');
  });

  it('should returns status code 400 because employee is not activate', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '88661202000',
      office: 'gerente',
      birthday: '22/09/1976'
    };

    const mockUpdates = {
      situation: 'deactivate'
    };

    let response = await request(app).post('/api/v1/employees').send(mockEmployee01);

    const { employee_id } = response.body;

    await request(app).put(`/api/v1/employees/${employee_id}`).send(mockUpdates);

    const mockProduct01 = {
      name: 'Chuteira Nike',
      category: 'calçado',
      price: '999.99',
      employee_id
    };

    response = await request(app).post('/api/v1/products').send(mockProduct01);

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBe('Employee is not activate');
  });

  it('should returns status code 400 because product price format is invalid', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '88661202000',
      office: 'gerente',
      birthday: '22/09/1976'
    };

    let response = await request(app).post('/api/v1/employees').send(mockEmployee01);

    const { employee_id } = await response.body;

    const mockProduct01 = {
      name: 'Chuteira Nike',
      category: 'calçado',
      price: '999,99',
      employee_id
    };

    response = await request(app).post('/api/v1/products').send(mockProduct01);

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBeDefined();
  });
});
