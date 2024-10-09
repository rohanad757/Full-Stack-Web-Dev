let express = require('express');
const jwt = require("jsonwebtoken")
let JWT_SECRET = "rohankey"

let app = express();
app.use(express.json());

let user = [];

app.post("/signup", function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    user.push({
        password: password,
        username: username,
    })
    console.log(user);
    res.json({
        msg: "User Created Successfully"
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = user.find(u => u.username === username && u.password === password);

    if (u) {
        const token = jwt.sign({
            username: u.username
        }, JWT_SECRET);

        // u.token = token;               // // Since jwt is stateless token we dont have to store it in database or any variable
        res.send({
            token
        })
        console.log(user);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});


app.get("/me", function (req, res) {
    let token = req.header.token;
    let decodedInfo = jwt.verify(token , JWT_SECRET);
    let username = decodedInfo.username;

    let foundUser = user.find((e) => {
        if (e.username == username) {
            return true;
        }
        else {
            return false;
        }
    })

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else {
        res.json({
            message: "Token Invalid"
        })
    }
})


app.listen(3000);