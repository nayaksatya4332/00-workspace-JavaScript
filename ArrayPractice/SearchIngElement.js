const subjectList = ['Physics', 'Chemistry', 'English', 'Math', 'Biology', 'English'];

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
//Gives first occuring index
console.log(subjectList.indexOf('English'));
//Gives last found index
console.log(subjectList.lastIndexOf('English'));
//To Check if item present or not
console.log(subjectList.indexOf('English') !== -1);
//To check directly presence of an item or not
console.log(subjectList.includes('Biology'));

//Searching Reference type Data in an Array

const found = marks.find(function (element) {
    return element.rollNo === '10A';
});
console.log(found);
const index = marks.findIndex(element => element.chm === 65);
console.log('Found At: '+index);