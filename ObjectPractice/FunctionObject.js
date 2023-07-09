function Student(name) {
    this.name = name;
    this.show = function () {
        console.log('Name:' + this.name);
    }
}
// console.log(Student.constructor);

const StudentConstructor = new Function('name', `
this.name = name;
this.show = function () {
    console.log('Name:' + this.name);
}`);

// StudentConstructor.call({},'Satya');
const std = new StudentConstructor('Satya');
