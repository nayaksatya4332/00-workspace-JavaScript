const student = { 
    firstName:'Satya',
    lastName:'Nayak'
}
const anotherStudent = { 
    firstName:'Rahul',
    lastName:'Anand'
}
function showFullName(){
    console.log('firstName:'+this.firstName+' '+'\nlastName:'+this.lastName);
}
// showFullName.call(student);

function showNameWithAddress(city,state){
    console.log('firstName:'+this.firstName+' '+'\nlastName:'+this.lastName
    +' '+'\nState:'+state+' '+'\nCity:'+city);
}
// showNameWithAddress.call(student,'bhubaneswar','Odisha');
// Using Apply
const arguments = ['Bhubaneswar','Odisha'];
// showNameWithAddress.apply(student,arguments);

const bindedMethod01 = showNameWithAddress.bind(student);
const bindedMethod02 = showNameWithAddress.bind(anotherStudent);

bindedMethod01(arguments[0],arguments[1]);
// console.log('###################3');
bindedMethod02('BBSR','Odisha');
