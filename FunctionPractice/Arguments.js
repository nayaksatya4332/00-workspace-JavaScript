function Test(a, b) {
    console.log('Sum:' + (a + b));
}
//If we dont provide specified argument it will give unexpected output
// Test(4);//Sum:NaN

//Solution 1
//Spread Operator
function Test(...args) {
    let sum = args.reduce((a, c) => a + c);
    console.log('Sum:' + sum);
}
// Test(1,2,3,4,5);

//Solution 2
//Default Argument
function Test(a=10,b=20) {
    console.log('Sum:' + (a+b));
}
Test();
