let express = require("express");
let app = express();

const users = [
    {
        name: "John",
        kidney: [{
            healthy: false
        }]
    }
]
app.use(express.json());

app.get('/', function (req, res) {                 // // read
    let johnKidney = users[0].kidney;
    let numberOfKidney = johnKidney.length;
    
    // // 1 way : --- >
    // let numberOfHealthyKidney = 0;
    // for (let i = 0; i < johnKidney.length; i++) {
    //     if (johnKidney[i].healthy) {
    //         numberOfHealthyKidney = numberOfHealthyKidney + 1;
    //     }
    // }

    // 2nd way : --- >
    let numberOfHealthyKidney = johnKidney.filter((kidney) => {            
        return kidney.healthy
    }).length;

    let numberOfUnhealthyKindey = numberOfKidney - numberOfHealthyKidney;
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKindey
    })
})
// ____________________________________________________________
app.post('/', function (req, res) {             // // read
    let isHealthy = req.body.isHealthy;         // // To give input in body : app.use(express.json());
    users[0].kidney.push({ 
        healthy: isHealthy
    })
    res.json({
        MSG: "Done"
    })
})
// _________________________________________________________________
app.put('/', function (req, res) {                      // // update
    for (let i = 0; i < users[0].kidney.length; i++) {
        users[0].kidney[i].healthy = true
    }
    res.json({
        msg: "Done"
    });
})

app.delete('/', function (req, res) {                          // // delete
    let newArrOfKid = [];
    for (let i = 0; i < users[0].kidney.length; i++) {
        if (users[0].kidney[i].healthy == true) {
            newArrOfKid.push({
                healthy: true
            });
        }
    }
    users[0].kidney = newArrOfKid;
    res.json({
        msg: "Virtual Transplant Successful"
    })
})
app.listen(3000);