
var dbconn = require('../../config/db.config');

var Employee = function (employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;

}

Employee.getAllEmployee = (result) => {
    dbconn.query('SELECT * FROM employee', (err, res) => {      
        if (err) {
            console.log("error", err);
            result(null, err);
        } else {
            console.log("Employees data fetched");
            result(null, res);
        }
    })
}

Employee.getSingleEmployeeData = (id, result) => {
    dbconn.query('SELECT * FROM employee WHERE id=?', id, (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
        } else {
            console.log("Employee data fetched");
            result(null, res);
        }
    })
}

Employee.addNewEmployee = (employeeData, result) => {
    dbconn.query('INSERT INTO employee SET ?', employeeData, (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
        } else {
            console.log("new employee added successfully!!");
            result(null, res);
        }
    })
}

Employee.updateEmployeeData = (id, employeeData, result) => {
    dbconn.query('UPDATE employee SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation =?, salary =? WHERE id=?',
        [employeeData.first_name, employeeData.last_name, employeeData.email, employeeData.phone,
        employeeData.organization, employeeData.designation, employeeData.salary, id], (err, res) => {
            if (err) {
                console.log("error", err);
                result(null, err);
            } else {
                console.log("employee updated successfully!!");
                result(null, res);
            }
        })

}

Employee.deleteEmployeeData = (id, result) => {
    dbconn.query('DELETE FROM employee WHERE id=?', [id], (err, res) => {
        if (err) {
            console.log("error", err);
            result(null, err);
        } else {
            console.log("employee data deleted successfully!!");
            result(null, res);
        }
    });

    // dbconn.query('UPDATE employee SET is_deleted=? WHERE id=?', [1, id], (err    , res) => {
    //     if (err) {
    //         console.log("error", err);
    //         result(null, err);
    //     } else {
    //         console.log("employee data deleted successfully!!");
    //         result(null, res);
    //     }

    // })
}

module.exports = Employee;