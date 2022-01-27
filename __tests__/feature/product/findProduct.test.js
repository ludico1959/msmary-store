const request = require('supertest');
const app = require('../../../src/app/app');

describe('find employee', () => {
  it('should return status code 200 and find product(s) sucessfuly', async () => {
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

    const mockProduct02 = {
      name: 'Bola de Society Total90',
      category: 'pelota',
      price: '129.99',
      employee_id
    };

    await request(app).post('/api/v1/products').send(mockProduct01);

    await request(app).post('/api/v1/products').send(mockProduct02);

    response = await request(app).get('/api/v1/products');

    const { body } = response;

    expect(response.statusCode).toEqual(200);
    expect(body.docs[0].product_id).toBeDefined();
    expect(body.docs[0].name).toBe('Chuteira Nike');
    expect(body.docs[0].category).toBe('calçado');
    expect(body.docs[0].price).toBe(999.99);
    expect(body.docs[0].employee_id).toBe(employee_id);
    expect(body.docs[1].product_id).toBeDefined();
    expect(body.docs[1].name).toBe('Bola de Society Total90');
    expect(body.docs[1].category).toBe('pelota');
    expect(body.docs[1].price).toBe(129.99);
    expect(body.docs[1].employee_id).toBe(employee_id);
    expect(body.currentPage).toBe(1);
    expect(body.pageSize).toBe(2);
    expect(body.totalCount).toBe(2);
    expect(body.totalPages).toBe(1);
  });

  it('should return status code 404 because no products were found', async () => {
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

    const mockProduct02 = {
      name: 'Bola de Society Total90',
      category: 'pelota',
      price: '129.99',
      employee_id
    };

    await request(app).post('/api/v1/products').send(mockProduct01);

    await request(app).post('/api/v1/products').send(mockProduct02);

    response = await request(app).get('/api/v1/products').query({ name: 'Camiseta' });

    const { body } = response;

    expect(response.statusCode).toEqual(404);
    expect(body.message).toBe('Not Found');
    expect(body.details.description).toBe('Results not found');
  });

  it('should return status code 400 because query is invalid', async () => {
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

    const mockProduct02 = {
      name: 'Bola de Society Total90',
      category: 'pelota',
      price: '129.99',
      employee_id
    };

    await request(app).post('/api/v1/products').send(mockProduct01);

    await request(app).post('/api/v1/products').send(mockProduct02);

    response = await request(app).get('/api/v1/products').query({ max_value: 199 });

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBeDefined();
  });
});
