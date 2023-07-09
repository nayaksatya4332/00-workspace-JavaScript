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
//Filtering Data based on some Condition
let res = subjectList.filter(element => element.length === 7);
//Filtering refrence Type data
res = marks.filter(e => e.chm > 70);
//Mapping Each Element of an array with primitive data
res = subjectList.map((e, i) => `Sub ${i + 1}: ` + e);
//Mapping Reference type Data
res = marks.map(e => ({ total: e.phy + e.chm + e.mth }));
//Reduce an Array with refrence type data
res = res.reduce((acc, curr) => {
    return ({ total: acc.total + curr.total });
}, { total: 0 });
console.log(res);