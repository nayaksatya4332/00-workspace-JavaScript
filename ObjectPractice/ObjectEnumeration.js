let student = {
    firstName:'Satya',
    lastName:'Nayak'
}
let names = ['Satya','Rahul','Soumya'];

for(let key in student){
    console.log(key,student[key]);
}
for(let key of Object.keys(student)){
    console.log(key,student[key]);
}

// Enumerating the Entries of an Object

for(let entry of Object.entries(student)){
    console.log(entry);
}

//Enumerating an Array

for(let name of names){
    console.log(name);
}

//To Check a property exist in an Object 
if('firstName' in student){
    console.log('Found');
}else{
    console.log('Not Found');
}
