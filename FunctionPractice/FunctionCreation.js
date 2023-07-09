//Function Declaration
function Test(){
    console.log('Function Declaration');
}
//Anonymous function Expression
let f1 = function(){
    console.log('Anonymous Function Expression');
}
//Named Function Expression
let f2 = function Test(){
    console.log('Named Function Expression');
}
Test();
f1();
f2();
let f3 = f2;
f3();