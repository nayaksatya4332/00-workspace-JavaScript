const subjectList = ['Physics', 'Chemistry', 'Math', 'Biology', 'English'];

const marks = [
    {
        rollNo: '10A',
        phy: 98,
        chm: 88,
        mth: 79
    },
    {
        rollNo: '10B',
        phy: 72,
        chm: 80,
        mth: 72
    },
    {
        rollNo: '10C',
        phy: 89,
        chm: 65,
        mth: 75
    },

];

//Spliting a array to two array
const arr01 = subjectList.slice(0,2);//0,1
const arr02 = subjectList.slice(2);//2,3,4...
console.log(arr01);
console.log(arr02);
//Concatenating tow array
//Approach 01
let arr03 = arr01.concat(arr02);
//Approach 02 Using Spread Operator
// let arr03 = [...arr01,...arr02];
console.log(arr03);
//Join an array to a single string based on delimeters 
const arrData = arr03.join(',');
console.log(arrData);
//Splitting elements from an String to an array of Strings
const arr04 = arrData.split(',');
console.log(arr04);
