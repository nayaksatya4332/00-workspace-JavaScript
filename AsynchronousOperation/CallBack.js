console.log("Before");
getUserById(1, (user) => {
    getRepositories(user.name,(repos=[])=>{
        getCommits(repos[0],(commits=[])=>{
            console.log(commits);
        });
    });
});
console.log("After");


function getUserById(id, callback) {
    setTimeout(() => {
        console.log("Getting User..");
        callback({
            id: 1,
            name: 'Satya',
            age: 26
        });
    }, 1000);
}
function getRepositories(userName, callback) {
    setTimeout(() => {
        console.log('Getting Repositories..');
        callback(["repo1", "repo2", "repo3"]);
    }, 1000);
}
function getCommits(repo,callback){
    setTimeout(()=>{
        console.log('Getting Commits..');
        callback(['Commit01','Commit02','Commit03']);
    },1000);
}