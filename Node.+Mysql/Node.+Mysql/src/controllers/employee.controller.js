const EmployeeModel = require('../models/employee.module');

//get employee list
exports.getEmployeeList = (req, res) => {
    // console.log("Employee List");
    // res.json({status:"true"});
    EmployeeModel.getAllEmployee((err, employee) => {
        console.log("Employee List");
        if (err)
            res.send(err);
        res.send(employee);
        console.log("Employees", employee);
    })
};

//get employee by id
exports.getEmployeeById = (req, res) => {
    // console.log("Employee data by id");
    EmployeeModel.getSingleEmployeeData(req.params.id, (err, employee) => {
        console.log("Employee Data by id");
        if (err)
            res.send(err);
        res.send(employee);
        console.log("Employee data by id", employee);
    })

};

exports.newEmployee = (req,res) => {
    console.log("new employee added successfully!!",req.body);
    const employeeData = new EmployeeModel(req.body);
    console.log ("Employee data" , employeeData);

    if(req.body.constructor === Object && Object(req.body).length === 0){
        res.send(400).send({success: false, message: "please fill every fields"});
    }
    else{
    
        EmployeeModel.addNewEmployee( employeeData, (err,employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Employee Added Successfully', data: employee.insertId})
        })
    }
    
}


exports.updateEmployee = (req,res) => {
    console.log("employee updated successfully!!",req.body);
    const employeeData = new EmployeeModel(req.body);
    console.log (" Updated Employee data" , employeeData);

    if(req.body.constructor === Object && Object(req.body).length === 0){
        res.send(400).send({success: false, message: "please fill every fields"});
    }
    else{
    
        EmployeeModel.updateEmployeeData(req.params.id,employeeData, (err,employee)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Updated Employee data'});
        })
    }
    
}

exports.deleteEmployee = (req,res) => {
    EmployeeModel.deleteEmployeeData(req.params.id,(err,employee)=>{
        if(err)
            res.send(err);
            res.json({status: true, message: 'Employee data deleted'});
    })
}