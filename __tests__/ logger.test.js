'use strict';

const logger = require('../src/middleware/logger.js');

describe('test logger middleware', ()=>{
    
let consoleSpy ;
let req = {};
let res = {};
let next = jest.fn();
    beforeEach(()=>{
        consoleSpy = jest.spyOn(console , 'log').mockImplementation();
        })

    it('test log' , ()=>{

        logger(req,res,next);
        expect(consoleSpy).toHaveBeenCalled()
    }) 

    it('test next',()=>{
        
        logger(req,res,next);
        expect(next).toHaveBeenCalled()
    })
})