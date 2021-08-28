'use strict';

const {server} = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);


describe ('express server' , ()=> {


  it('shoud check the Working... works successfully', async()=> {
    //arange
    let param = '/';
    let status = 200;
    let text = 'Working...';

    //act 
    const response = await request.get(param);
    
    // assert
    expect(response.status).toBe(status);
    expect(response.text).toBe(text);
  });

  it('should check 500 errors', async()=> {
    //arange
    let param = '/bad';
    let status = 500;

    //act 
    const response = await request.get(param);

    // assert
    expect(response.status).toBe(status);
    expect(response.body.route).toBe(param);
  });

  it('shoud check 404 errors', async()=> {
    //arange

    let param = '/notfound';
    let status = 404;

    //act
    const response = await request.get(param);

    // assert
    expect(response.status).toBe(status);
  });

  /// food status
  it('check for the get /api/v1/food status', async () => {
    const response = await request.get('/api/v1/food'); 
    expect(response.status).toBe(200);
  });

  it('check for the get /api/v1/food:id status', async () => {
    const response = await request.get('/api/v1/food/1'); 
    expect(response.status).toBe(200);
  });

  it('check for the status for the POST', async () => {
    const foodObj={
      'foodMeal': 'pizza',
      'drink': 'none',
      'totalPrice':'100',
    };
    const response = await request.post('/api/v1/food').send(foodObj); 
    expect(response.status).toBe(201);
  });

  it('check for the status for the update', async () => {
    const response = await request.put('/api/v1/food/2'); 
    expect(response.status).toBe(200);
  });
  
  it('check for the status for the delete', async () => {
    const response = await request.delete('/api/v1/food/1'); 
    expect(response.status).toBe(204);
  });

  /// clothes status
  it('check for the get /api/v1/clothes status', async () => {
    const response = await request.get('/api/v1/clothes'); 
    expect(response.status).toBe(200);
  });
  
  it('check for the get /api/v1/clothes:id status', async () => {
    const response = await request.get('/api/v1/clothes/1'); 
    expect(response.status).toBe(200);
  });
  
  it('check for the status for the POST', async () => {
    const clothesObj={
      'clothesType': 'shirt',
      'clothesColor': 'black',
    };
    const response = await request.post('/api/v1/clothes').send(clothesObj); 
    expect(response.status).toBe(201);
  });
  
  it('check for the status for the update', async () => {
    const response = await request.put('/api/v1/clothes/12'); 
    expect(response.status).toBe(200);
  });
    
  it('check for the status for the delete', async () => {
    const response = await request.delete('/api/v1/clothes/1'); 
    expect(response.status).toBe(204);
  });

});