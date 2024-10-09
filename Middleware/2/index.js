const express = require("express");
const app = express();

function isOldEnough(req , res , next ){
    let age = req.query.age;
    if(age > 20){
        next();
    }
    else{
        res.json({
            msg : "You cannot Ride"
        })
    }
}

app.use(isOldEnough)             // // a middle ware declared here means all the routes below need to go cheak by this middleware

app.get("/" , isOldEnough , function(req , res){           
    res.json({
        msg : "You can Ride"
    })
})


app.listen(3000);