function getStudent(id, name, city, state) {
    return {
        id: id,
        name: name,
        address: {
            city: city,
            state: state
        },
        showStudent() {
            console.log('Id:' + this.id + ' ' + '\nname:' + this.name + ' '
                + '\naddress:' + '[' + 'city:' + this.address.city + ',' + 'state:' + this.address.state + ']')
        }
    }
}
const std = getStudent(12,'Satya','Bhubaneswar','Odisha');
std.showStudent();