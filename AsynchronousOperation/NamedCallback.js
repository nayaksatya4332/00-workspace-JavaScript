console.log("Before");
getUserById(1, getUser);
console.log("After");

function getUser(user){
    getRepositories(user.name,displayRepo);
}
function displayRepo(repos=[]){
    console.log(user.name+' has '+ repos.length +' Repositories');
    console.log(repos);
}

function getUserById(id, callback) {
    setTimeout(() => {
        console.log("Calling API..");
        callback({
            id: 1,
            name: 'Satya',
            age: 26
        });
    }, 1000);
}
function getRepositories(userName, callback) {
    setTimeout(() => {
        callback(["repo1", "repo2", "repo3"]);
    }, 1000);
}