let express = require('express');
let app = express();

function loggerMiddleware(req, res, next) {
    console.log("Method is ", req.method);
    console.log("Host is ", req.hostname);
    console.log("Rout is ", req.url);
    console.log(new Date());
    next();
}

app.use(loggerMiddleware);

app.get("/", function (req, res) {
    res.json({
        Method : req.method , 
        Host : req.hostname , 
        Rout : req.url , 
        Date : new Date()
    })
})



app.listen(3000);