// let express = require("express");
// let app = express();

// // express.json() middleware : --- >

// app.use(express.json())        // // This will let us pass the json in a body (postman)

// app.post('/' , function(req , res){
//     console.log(req.body);
//     let a = parseInt(req.body.a);
//     let b = parseInt(req.body.b);
//     res.json({
//         ans  : a + b
//     })
// })
// app.listen(3000);
// _______________________________________________________________________________________________

// // cross origin resource sharing : --- >
let express = require("express");
let cors = require("cors");
let app = express();

app.use(express.json())        // // This will let us pass the json in a body (postman)
app.use(cors());

app.post('/' , function(req , res){
    console.log(req.body);
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    res.json({
        ans  : a + b
    })
})
app.listen(3000);