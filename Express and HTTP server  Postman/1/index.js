let express = require("express");

function Sum(n){
    let ans = 0 ;
    for(let i=0 ; i<= n ; i++){
        ans += i;
    }
    return ans;
}

let app = express();

app.get("/", function(req,res){
    const a = req.query.n;
    const ans = Sum(a);
    res.send(ans.toString());
})

app.listen(3000);