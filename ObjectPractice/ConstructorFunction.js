function Address(city,state){
    this.city = city;
    this.state = state;
}
function Student(id, name, city, state) {
    this.id = id;
    this.name = name;
    this.address = new Address(city,state);
    this.showStudent = function () {
        console.log('Id:' + this.id + ' ' + '\nname:' + this.name + ' '
            + '\naddress:' + '[' + 'city:' + this.address.city + ',' + 'state:' + this.address.state + ']')
    }
}

const std = new Student(12,'Satya','bhubaneswar','Odisha');
std.showStudent();