let express = require("express");
let app = express();

let reqCount = 0;

// // using Functions : --- >
// function middle() {                 
//     reqCount = reqCount + 1;            
//     console.log(reqCount);                    
// }

// // using middleware : --- >
app.use(function (req, res, next) {
    reqCount = reqCount + 1;
    console.log(reqCount);
    req.name = "Rohan"
    next();
})

app.get("/:a/:b", function (req, res) { 
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    // console.log(req.name);
    let sum = a + b ;
    res.json({
        result : sum ,
        count : reqCount , 
        nam : req.name
    })
})

app.get("/mult/:a/:b", function (req, res) { 
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);
    let mult = a * b;
    res.json({
        result : mult , 
        count : reqCount
    })
})


app.listen(3000);