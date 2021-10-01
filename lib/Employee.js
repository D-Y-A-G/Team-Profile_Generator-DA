class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getName() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name:"name",
                    message: "Please input name of employee"
                }
            ])
            .then(val=> {
                if(val.name){
                    this.play();
                } else {
                    this.quit();
                }
            });
    }

    getId() {

    }
//////////////////adding another employee/////////////////////////////

    addEmployee() {
        
    }

    addAnotherEmployee() {
        inquirer
            .prompt([
                {
                    type: "confirm",
                    name:"choice",
                    message: "Would you like to add another employee?"
                }
            ])
            .then(val=> {
                if(val.name){
                    this.addEmployee();
                } else {
                    this.quit();
                }
            });
    }

}