const student = {
    firstName:'Satya',
    lastName:'Nayak'
}
const std1 = {};
//Approach 01
for(let key in student){
    std1[key] = student[key];
}
//Applroach 03
const std2 = Object.assign({},student);
//Applroach 03
const std3 = {...student}
console.log(std3);