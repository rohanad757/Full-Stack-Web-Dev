if (ageChech(req.query.umar)) {
    res.json({msg :"You can vote"})
}
else{
    res.status(411).json({
        msg : "You are under 18"
    })
}