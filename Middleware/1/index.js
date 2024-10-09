let express = require("express");
let app = express();

function ageCheck(age){
    if (age > 18) {
        return true;
    }  
    else{
        return false;
    }
}

app.get("/", function(req , res){
    if (ageCheck(req.query.age)) {
        res.json({msg : "You can ride"})
    }
    else{
        res.json({msg : "You cant Ride"})
    }
})
app.listen(3000);