///// Setup constructor class and method to get val ///
const manager = require('../lib/Manager')
const engineer = require('../lib/Engineer')
const intern = require('../lib/Intern')

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getName() {
     return this.name;
    }

    getId() {
     return this.id;
    }

    getEmail() {
     return this.email;
    }

}


module.exports = Employee;