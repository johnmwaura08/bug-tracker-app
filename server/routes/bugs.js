var express = require('express');
var router = express.Router();
let Bug = require('../models/bug');
let moment = require('moment');
/* GET bug listing. */
router.route('/').get((req,res)=>{
    Bug.find()
        .then(bugs => res.json(bugs))
        .catch(err => res.status(400).json("Error:" + err));

})



//post bugs to database


router.route('/add').post((req,res)=>{

const title = req.body.title;
const project = req.body.project;
const deadline = moment(date).format('LLLL')(req.body.deadline);
const bugtype = req.body.bugtype;
const status = req.body.status;
const comments = req.body.comments








  const newBug = new Bug({

    title,
    project,
    deadline,
    bugtype,
    status,
    comments

  });

  newBug.save()
        .then(() => res.json("Bug Added"))
        .catch(err => res.status(400).json("Error:" + err));


  console.log(newBug)


})

module.exports = router;
