import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Cidades - Create', () => {



  it('Cria registro', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Leme' });



    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');


  });

  it('Nao criar registro com o nome curto', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Le' });



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('erros.body.nome');


  });

  it('Nao criar registro com o sem nome', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({});



    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty('erros.body.nome');


  });


});
