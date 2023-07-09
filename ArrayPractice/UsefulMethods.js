const subjectList = ['Physics', 'Chemistry', 'Math', 'Biology', 'English'];
const scores = [90, 88, 10, 32, 99, 22];
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
//Sort Method
scores.sort();
console.log(scores);
marks.sort(function (a, b) {
    totalA = a.phy + a.chm + a.mth;
    totalB = b.phy + b.chm + b.mth;
    if (totalA > totalB) return 1;
    if (totalA < totalB) return -1;
    return 0;
});
//Reverse An array
marks.reverse();
console.log(marks);
//ForEach Method..
subjectList.forEach((element, i) => console.log(i + ':' + element));
//Every,Some Method it will Check some condition on all elements and return boolean value
//In every() it will return false the moment it finds an element not satisfing the condition
let res = marks.every(function (element) {
    return element.chm > 70;
});
console.log(res);
//It will Check for atleast one element satisfying condition
res = marks.some(e => e.chm < 70);
console.log(res);