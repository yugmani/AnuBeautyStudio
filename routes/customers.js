const router = require("express").Router();
const Customer = require("../models/customer");

router.route("/").get((req, res) => {
  
  Customer.find()
    .sort({date:-1})
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error:' + err));
});


router.route('/add').post((req, res)=>{
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const service = req.body.service;
  const date = Date.parse(req.body.date);

  const newCustomer = new Customer({
    name,
    email,
    phone,
    service,
    date,
  });

  newCustomer.save()
    .then(() => res.json('New Customer Added!'))
    .catch(err => res.status(400).json('Error:' + err)); 

});


router.route('/:id').get((req, res)=>{
  Customer.findById(req.params.id)
    .then(customer=>res.json(customer))
    .catch(err=>res.status(400).json('Error' + err));
});

router.route('/:id').delete((req, res)=>{
  Customer.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Customer Deleted!'))
    .catch(err=>res.status(400).json('Error' + err));
});

router.route('/update/:id').post((req, res) =>{
  Customer.findById(req.params.id)
    .then(customer=>{
        customer.name = req.body.name;
        customer.email = req.body.email;
        customer.phone = req.body.phone;
        customer.service = req.body.service;
        customer.date = Date.parse(req.body.date);

        customer.save()
          .then(()=>res.json('Customer Updated!'))
          .catch(err =>res.status(400).json('Error:' + err));
    })
    .catch(err=>res.status(400).json('Error:' + err))
    
    });

module.exports = router;


//to update in postman: http://localhost:3000/customers/update/5e6f1d95db67a65b5c2ea648
//to delete in postman: http://localhost:3000/customers/5e6f1d95db67a65b5c2ea648