'use strict';

const validator = require('../src/middleware/ validator.js');

describe('test validator middleware',()=>{
    it('reject request without a name',()=>{
        let req = {query:{}};
        let res ={};
        let next = jest.fn();
        validator(req,res,next);
        expect(next).toHaveBeenCalledWith('please type a name.');
    })

    it('allow request without a name',()=>{
        let req = {query:{name:'bushra'}};
        let res ={};
        let next = jest.fn();
        validator(req,res,next);
        expect(next).toHaveBeenCalled();
    })
})