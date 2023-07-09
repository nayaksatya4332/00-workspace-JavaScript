const student = {
    id:12,
    name:'Satya',
    address:{
        city:'Bhubaneswar',
        state:'Odisha'
    },
    showStudent(){
        console.log('Id:'+this.id+' '+'\nname:'+this.name+' '
        +'\naddress:'+'['+'city:'+this.address.city+','+'state:'+this.address.state+']')
    }
}
student.showStudent();