const express = require('express');
const app = express();

app.get('/sum' , function(req , res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        sum : a + b
    })
})

app.get('/multiply' , function(req , res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    
    res.json({
        mult : a * b
    })
})

// // params : --- >
app.get("/addition/:firstArg/:secArg" , function(req , res){
    const a = parseInt(req.params.firstArg);
    const b = parseInt(req.params.secArg);

    res.json({
        sum : a + b
    })
})


app.listen(3000);