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
//Remove from end
subjectList.pop();
//Removing from Begininng
subjectList.shift();
//Removinf in MIddle
subjectList.splice(1, 1);
//1st arg (Position in index)
//2nd arg (How many item to delete from position)

//Remove all Elements
//subjectList.length = 0;
//subjectList = [];
//subjectList.splice(0,subjectList.length);
console.log(subjectList);