const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employee.controller');

//get employee list
router.get('/' , EmployeeController.getEmployeeList);

//get employee by id
router.get('/:id',EmployeeController.getEmployeeById);

//add new employee
router.post('/',EmployeeController.newEmployee);

//update employee data
router.put('/:id',EmployeeController.updateEmployee);

//delete employee data
router.delete('/:id',EmployeeController.deleteEmployee);

module.exports = router;