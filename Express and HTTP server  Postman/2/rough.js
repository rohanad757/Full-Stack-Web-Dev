const users = [
    {
        name: "John",
        kidney: [{
            healthy: true ,
        },{healthy:false}]
    }
]
let johnKidney = users[0].kidney;
let numberOfKidney = johnKidney.length;
// let numberOfHealthyKidney = 0;
// for (let i = 0; i < johnKidney.length; i++) {
//     if (johnKidney[i].healthy) {
//         numberOfHealthyKidney = numberOfHealthyKidney + 1;
//     }
// }
let numberOfHealthyKidney = johnKidney.filter((kidney) => {
    // return kidney.healthy;
    let count = 0;
    if (kidney.healthy === true) {
        count++;
    }
    // else{
    //     count = null;
    // }
    return count;
}).length;
console.log(numberOfHealthyKidney);
