console.log("Before");


// getUserById(1)
//     .then((user)=>getRepositories(user.name))
//     .then((repos)=>getCommits(repos[0]))
//     .then(commits=>console.log('Commits: '+commits))
//     .catch(err=>console.log("Error: ",err.message));

async function displayCommit() {
    try{
        const user = await getUserById(1);
        const repos = await getRepositories(user.name);
        const commits = await getCommits(repos[0]);
        console.log('Commits: ' + commits);
    }catch(err){
        console.log(err.message);
    }
  
}
displayCommit();
console.log("After");

//Instead of callinng callbacks we will return a promise object
function getUserById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting User..");
            resolve({
                id: 1,
                name: 'Satya',
                age: 26
            });
        }, 1000);
    });
}
function getRepositories(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting Repositories..');
            // resolve(["repo1", "repo2", "repo3"]);
            reject(new Error('Could not get Repo'));
        }, 1000);
    });
}
function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting Commits..');
            resolve(['Commit01', 'Commit02', 'Commit03']);
        }, 1000);
    });

}