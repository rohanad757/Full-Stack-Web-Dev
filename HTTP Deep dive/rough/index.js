let express = require("express")
let app = express();

app.use(express.json());

let users = [];

function tokenGenerator() {
    let options = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let token = "";
    for (let i = 0; i < 32; i++) {
        token = token + options[Math.floor(Math.random() * options.length)]
    }
    return token;
}

app.post("/signup", function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        msg: "Creted Account Successfully"
    })
})

app.post("/signin", function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    let userFound = users.find((u) => {
        if (u.username == username && u.password == password) {
            return true;
        }
        else {
            false;
        }
    })
    if (userFound) {
        let token = tokenGenerator();
        userFound.token = token;
        res.json({
            Token: token,
            Username: username,
            Password: password
        })
    }
    else {
        res.status(403).send({
            messsage: "Invalid username or password"
        })
    }
    // console.log(users);
})

app.get("/me", function (req, res) {
    let token = req.headers.token;
    let userFound = users.find((t) => {
        if (t.token == token) {
            return true;
        }
        else {
            return false;
        }
    })
    if (userFound) {
        res.json({
            Username: userFound.username,
            Password: userFound.password
        })
    }
    else {
        res.json({
            msg: "Something went wrong"
        })
    }
})

app.listen(3000);