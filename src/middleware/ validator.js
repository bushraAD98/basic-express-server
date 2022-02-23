'use strict'; 


const validator  = (req,res,next) =>{
req.theName = req.query;
if(req.theName == req.query ){
    next();
}
else{
    next('please type a name.');
}

}

module.exports = validator;