const express = require('express');
const EmployeeRoutes = require('./src/routes/employee.route');
const BodyParser = require('body-parser');

//express app
const app = express();

//server port setup
const port = process.env.PORT || 5000;

// parse request data - content type: application/x-www-form-urlencoded
app.use(BodyParser.urlencoded({extended: false}));

//parse request data - content type: application/json
app.use(BodyParser.json());

//create employee route
app.use('/api/employee',EmployeeRoutes);

//define root-route
app.get('/',(req,res)=>{
    res.send("Helloo!!");
});
//listen to the port
app.listen(port,()=>{
    console.log(`server is runningpn port ${port}`);
});