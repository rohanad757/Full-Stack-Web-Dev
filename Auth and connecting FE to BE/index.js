let express = require('express');
let app = express();
let jwt = require('jsonwebtoken');
let JWT_SECRET = "rohan1234";

app.use(express.json());
let users = [];



app.post("/signup", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    users.push({
        username: username,
        password: password
    })
    res.json({
        msg: "Created Usser"
    })
})


app.post("/signin", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    const foundUser = users.find((u) => {
        if (u.username == username && u.password == password) {
            return true;
        }
        else {
            return false;
        }
    })
    if (foundUser) {
        let token = jwt.sign({
            username
        } , JWT_SECRET)
        res.json({
            token : token
        })
    }
    else{
        res.json({
            msg : "Invalid username or password"
        })
    }
})

function auth(req , res , next){
    let token = req.headers.token;
    const decodedData = jwt.verify(token , JWT_SECRET)
    if (decodedData.username) {
        req.username = decodedData.username;
        res.json({
            message : "You are logged in"
        })
        next()
    }
    else{
        res.json({
            message : "NOt logged in"
        })
    }
}

app.get("/me", auth , (req, res) => {
    // let token = req.headers.token;
    // let decodedInformation = jwt.verify(token , JWT_SECRET);  // // No use of this since using middleware

    let userFound = users.find((u) => {
        if (u.username == req.username) {
            return true;
        }
        else{
            return false
        }
    })
    if (userFound) {
        res.json({
            username : userFound.username , 
            password : userFound.password ,
        })
    }
})

app.listen(3000);