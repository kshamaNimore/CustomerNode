const db = require('./db.config');
const Customer = db.customers;

function createCustomer(req, res) {
if(!req.body.name || !req.body.email || !req.body.age){
    return res.status(400).send({
        message :"Bad Data"
    });
    }
const customerObject = {
    name : req.body.name,
    email : req.body.email,
    age : req.body.age
}
Customer.create(customerObject).then(data=>{
    res.send(data);
}).catch(err=>{
    res.status(500).send(err);
});
}
//Get all customers
function findAllCustomers(req, res) {
Customer.findAll().then(data=>{
    res.send(data);
})
}

function findCustomersByemail(req, res) {
    Customer.findByPk(req.params.email).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send(err);
    });

}

function updateCustomer(req, res) {
const newData = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
}
Customer.update(newData,{
    where :{email: req.body.email}
}).then(data=>{
    res.send("Data updated Suceessfully for"+data);
}).catch(err=>{
    res.status(500).send(err);
});
}

function deleteCustomer(req, res) {
Customer.destroy({
 where :{email: req.params.email}
}).then(data=>{
    res.send("Customer deleted email for"+  req.params.email);
}).catch(err=>{
    res.status(500).send(err);
});
}

module.exports = {
    createCustomer,
    findAllCustomers,
    findCustomersByemail,
    updateCustomer,
    deleteCustomer
}