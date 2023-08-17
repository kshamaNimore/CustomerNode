const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = '3000';
const db = require('./db.config');

const controller = require('./customer.controller');

//Create table if not exist
db.sequelize.sync();
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('Welcome');
});

//Create Customer
app.post('/customers/new', (req, res) => {
    controller.createCustomer(req, res);
});
//Fetch All Customer

app.get('/customers/customers', (req, res) => {
    controller.findAllCustomers(req, res);
});
//Find by ID 
app.get('/customers/:email', (req, res) => {
    controller.findCustomersByemail(req, res);
});
//Update customer
app.put('/customers/update', (req, res) =>{
    controller.updateCustomer(req, res);
});
app.delete('/customers/delete/:email', (req, res) =>{
    controller.deleteCustomer(req, res);
});
app.listen(port,()=>{
    console.log('listening on port'+port);
});