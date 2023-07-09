//'this' always refers to the global(in Node) or window(in Browser) object in case of global functions
function Test() {
    console.log(this);
}
// Test();
//'this' inside a Method (function inside an object) always refers to that object only 
let student = {
    name: 'Satya',
    sub: ['Pysics', 'Chemistry', 'Math'],
    show() {
        // console.log(this.sub);
        //Inside call back function inside method of an object is a normal global function only
        //Due to which 'this' inside a call back function always refere to the global or window object
        //So since windpw or global wont be having any property with name it will give undefined
        // this.sub.forEach(function(e){
        //     console.log(this.name+':'+e);
        // });

        //Solution 1
        //Here Explicitely current object context is provided to the call back function
        // this.sub.forEach(function(e){
        //     console.log(this.name+':'+e);
        // },this);

        //Solution 2
        //Another varible will be taken to refer current object
        // let self = this;
        // this.sub.forEach(function(e){
        //     console.log(self.name+':'+e);
        // });

        //Solution 3
        //bind() will be used to bind the cuurent object to the call back function
        // this.sub.forEach(function(e){
        //     console.log(this.name+':'+e);
        // }.bind(this));

        //Solution 4 (Suggested)
        //Arrow function will be used as call back function which will by default refer to to the current object
        this.sub.forEach(e => console.log(this.name + ':' + e));
    }
}
student.show();