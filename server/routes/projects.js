var express = require('express');
const router = express.Router();


let Project = require('../models/project')

/* GET home page. */
// const projects = ['the good project', 'the best project', 'this projects']
router.route('/').get((req,res) => {

  Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err));

});



router.route('/add).post((req, res) => {

    const title = req.body.title;
    const frontEnd= req.body.frontEnd;
    const backEnd=req.body.backEnd;
    const user=req.body.user;
    const  comments=req.body.user;


    

    const newProject = new project({
                 title,
                frontEnd,
                backEnd,
                user,
                comments



            });

          
            newProject.save()
              .then(() => res.json(" Project added!"))
              .catch(err => res.status(400).json('Errpr: ' + err));
                    

           


            
            console.log(newProject)

});


module.exports = router;
