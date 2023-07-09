Test01();
test02();
//This can be called before its Definition
function Test01(){
    console.log('This function is hoisted by the javascript engine automatically..');
}
let test02 = function(){
    console.log('This function can\'t be Hoisted');
}
console.log(x);//ReferenceError: Cannot access 'x' before initialization
let x = 10;
