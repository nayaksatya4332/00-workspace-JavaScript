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
//Adding to End
subjectList.push('Electronics');
//Adding at Beginning
subjectList.unshift('Sanshkrit');
//Adding in Middle
subjectList.splice(2,0,'M.I.L');
//1st arg(At which index) 
//2nd arg(How many element to delete) 
//3rd arg(Element to add)

console.log(subjectList);