var express = require('express');
var router = express.Router();

let User = require('../models/user')
/* GET users listing. */

router.route('/').get((req,res)=>{
  User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error:" + err));

})

//add new user to database

router.route('/add').post((req,res)=>{

  const username = req.body.username;
  const email = req.body.email;
  const occupation = req.body.occupation;
  const contact =Number(req.body.contact);


  const newUser = new User({
    username,
    email,
    occupation,
    contact

  });

  newUser.save()
          .then(()=> res.json("User Added"))
          .catch(err => res.status(400).json("Error:" + err));

  
  console.log(newUser)

});


module.exports = router;
