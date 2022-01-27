const request = require('supertest');
const app = require('../../../src/app/app');

describe('find employee', () => {
  it('should return status code 200 and find employee(s) sucessfuly', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '26421419003',
      office: 'gerente',
      birthday: '22/09/1976'
    };

    const mockEmployee02 = {
      name: 'Zlatan Ibrahimović',
      cpf: '23385560039',
      office: 'caixa',
      birthday: '03/10/1981'
    };

    await request(app).post('/api/v1/employees').send(mockEmployee01);

    await request(app).post('/api/v1/employees').send(mockEmployee02);

    const response = await request(app).get('/api/v1/employees');

    const { body } = response;

    expect(response.statusCode).toEqual(200);
    expect(body.docs[0].employee_id).toBeDefined();
    expect(body.docs[0].name).toBe('Ronaldo Nazário');
    expect(body.docs[0].cpf).toBe('264.214.190-03');
    expect(body.docs[0].office).toBe('gerente');
    expect(body.docs[0].birthday).toBe('22/09/1976');
    expect(body.docs[0].situation).toBe('activate');
    expect(body.docs[0].createdAt).toBeDefined();
    expect(body.docs[0].updatedAt).toBeDefined();
    expect(body.docs[1].employee_id).toBeDefined();
    expect(body.docs[1].name).toBe('Zlatan Ibrahimović');
    expect(body.docs[1].cpf).toBe('233.855.600-39');
    expect(body.docs[1].office).toBe('caixa');
    expect(body.docs[1].birthday).toBe('03/10/1981');
    expect(body.docs[1].situation).toBe('activate');
    expect(body.docs[1].createdAt).toBeDefined();
    expect(body.docs[1].updatedAt).toBeDefined();
    expect(body.currentPage).toBe(1);
    expect(body.pageSize).toBe(2);
    expect(body.totalCount).toBe(2);
    expect(body.totalPages).toBe(1);
  });

  it('should return status code 200 and find employee(s) by a string part in their names', async () => {
    const mockEmployee01 = {
      name: 'Ronaldo Nazário',
      cpf: '26421419003',
      office: 'gerente',
      birthday: '22/09/1976'
    };

    const mockEmployee02 = {
      name: 'Zlatan Ibrahimović',
      cpf: '23385560039',
      office: 'caixa',
      birthday: '03/10/1981'
    };

    const mockEmployee03 = {
      name: 'Cristiano Ronaldo',
      cpf: '51917675003',
      office: 'vendedor',
      birthday: '05/02/1985'
    };

    await request(app).post('/api/v1/employees').send(mockEmployee01);

    await request(app).post('/api/v1/employees').send(mockEmployee02);

    await request(app).post('/api/v1/employees').send(mockEmployee03);

    const response = await request(app).get('/api/v1/employees').query({ name: 'Ronaldo' });

    const { body } = response;

    expect(response.statusCode).toEqual(200);
    expect(body.docs[0].employee_id).toBeDefined();
    expect(body.docs[0].name).toBe('Ronaldo Nazário');
    expect(body.docs[0].cpf).toBe('264.214.190-03');
    expect(body.docs[0].office).toBe('gerente');
    expect(body.docs[0].birthday).toBe('22/09/1976');
    expect(body.docs[0].situation).toBe('activate');
    expect(body.docs[0].createdAt).toBeDefined();
    expect(body.docs[0].updatedAt).toBeDefined();
    expect(body.docs[1].employee_id).toBeDefined();
    expect(body.docs[1].name).toBe('Cristiano Ronaldo');
    expect(body.docs[1].cpf).toBe('519.176.750-03');
    expect(body.docs[1].office).toBe('vendedor');
    expect(body.docs[1].birthday).toBe('05/02/1985');
    expect(body.docs[1].situation).toBe('activate');
    expect(body.docs[1].createdAt).toBeDefined();
    expect(body.docs[1].updatedAt).toBeDefined();
    expect(body.currentPage).toBe(1);
    expect(body.pageSize).toBe(2);
    expect(body.totalCount).toBe(2);
    expect(body.totalPages).toBe(1);
  });

  it('should return status code 404 because no results were found', async () => {
    const mockEmployee01 = {
      name: 'Zlatan Ibrahimović',
      cpf: '23385560039',
      office: 'caixa',
      birthday: '03/10/1981'
    };

    await request(app).post('/api/v1/employees').send(mockEmployee01);

    const response = await request(app).get('/api/v1/employees').query({ name: 'Ronaldo' });

    const { body } = response;

    expect(response.statusCode).toEqual(404);
    expect(body.message).toBe('Not Found');
    expect(body.details.description).toBe('Results not found');
  });

  it('should return status code 400 because "cozinhheiro" is not a valid office option', async () => {
    const mockEmployee01 = {
      name: 'Zlatan Ibrahimović',
      cpf: '23385560039',
      office: 'caixa',
      birthday: '03/10/1981'
    };

    await request(app).post('/api/v1/employees').send(mockEmployee01);

    const response = await request(app).get('/api/v1/employees').query({ office: 'cozinheiro' });

    const { body } = response;

    expect(response.statusCode).toEqual(400);
    expect(body.message).toBe('Bad Request');
    expect(body.details.description).toBeDefined();
  });
});
