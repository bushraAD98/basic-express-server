'use strict';


const express = require('express');
// const res = require('express/lib/response');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const err500 = require('./error-handlers/500.js');
const err404 = require('./error-handlers/404.js');

app.use(cors());
app.use(logger);
app.use(validator);



app.get('/person',(req,res,next)=>{
   
    res.status(200).json({
        name : req.theName 
       
    })
    next();

   })




















   app.use(err500);
   app.use('*',err404);
function start(PORT){
    app.listen( PORT,()=>{
console.log(`listen to port ${PORT}`);
    })
}


module.exports = {
    app : app ,
    start : start
    }