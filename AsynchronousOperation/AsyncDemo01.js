console.log("Before")
let user = getUserById(1);
console.log(user);
//Here the user will be undefined because the called function will not provide data immediately
function getUserById(id) {
    setTimeout(() => {
        console.log("Calling API..");
        return {
            id: 1,
            name: 'Satya',
            age: 26
        }
    }, 2000);
    // return "Immediate Value.."
}