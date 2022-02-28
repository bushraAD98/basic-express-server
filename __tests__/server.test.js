'use strict';

const server = require('../src/server.js');

const supertest = require('supertest');

const request = supertest(server.app);

describe('testing API server',()=>{

    // it('testing /',async()=>{
    //     const response = await request.get('/');
    //     // console.log(response);
    //     expect(response.text).toEqual('home route');
    //     // expect(response.status).toEqual(200);
    // })

    it('test /person', async()=>{
        const response = await request.get('/person');
        expect(typeof response.body).toEqual('object')
    })

    it('test /person', async()=>{
        const response = await request.get('/person');
        expect( response.status).toEqual(500)
    })
    
    it('test /person?name=bushra', async()=>{
        const response = await request.get('/person?name=bushra');
        expect(typeof response.body).toEqual('object')
    })
      
    it('test /person?name=bushra', async()=>{
        const response = await request.get('/person?name=bushra');
        expect(response.status).toEqual(200)
    })
      
    it('test /person?name=', async()=>{
        const response = await request.get('/person?name=');
        expect(response.status).toEqual(500)
    })
      
    it('test /perso', async()=>{
        const response = await request.get('/perso');
        expect(response.status).toEqual(404)
    })
})
