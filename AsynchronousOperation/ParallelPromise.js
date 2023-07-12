const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Getting Promise 01..");
        resolve(1);
    }, 1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Getting Promise 02..");
        resolve(100);
    }, 5000);
});
//Result will be available once all the promise resolved
// Promise.all([p1,p2])
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err.message));

//Here The result of first resolved promise will be returned
Promise.race([p1, p2])
    .then(res => console.log(res))
    .catch(err => console.log(err.message));