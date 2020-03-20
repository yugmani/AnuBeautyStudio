const router = require("express").Router();
const Service = require("../models/service");

router.route("/").get((req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  // Customer.find({
  //   // name: { $regex: new RegExp(req.query.q, 'i')}
  // })
  Service.find()
    .then(services => res.json(services))
    .catch(err => res.status(400).json('Error:' + err));
});


router.route('/add').post((req, res)=>{
  const service = req.body.service;
  const price = req.body.price;

  const newService = new Service({
    service,
    price,
  
  });

  newService.save()
    .then(() => res.json('New Service Added!'))
    .catch(err => res.status(400).json('Error:' + err)); 

});



router.route('/:id').get((req, res)=>{
  Service.findById(req.params.id)
    .then(service=>res.json(service))
    .catch(err=>res.status(400).json('Error' + err));
});

router.route('/:id').delete((req, res)=>{
  Service.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Service item Deleted!'))
    .catch(err=>res.status(400).json('Error' + err));
});

router.route('/update/:id').post((req, res) =>{
 Service.findById(req.params.id)
    .then(service=>{
        service.service = req.body.service;
        service.price = req.body.price;
        
        service.save()
          .then(()=>res.json('Sercie Item Updated!'))
          .catch(err =>res.status(400).json('Error:' + err));
    })
    .catch(err=>res.status(400).json('Error:' + err))
    
    });

module.exports = router;
