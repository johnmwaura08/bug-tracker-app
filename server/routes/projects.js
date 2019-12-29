var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const project = require('../models/project')

/* GET home page. */
// const projects = ['the good project', 'the best project', 'this projects']

router.get('/', function(req, res, next) {

  project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err));

});



router.post('/projects',function(req,res,next){

    const title = req.body.title;
    const frontEnd= req.body.frontEnd;
    const backEnd=req.body.backEnd;
    const user=req.body.user;
    const  comments=req.body.user


    

             const newProject = new project({
                 title,
                frontEnd,
                backEnd,
                user,
                comments



            });

          
            newProject.save(function(err,results){
                        if(err){
                            console.log("Error trying to save document"+ req.body);
                            res.status(404);
                        }
                        else {
                        res.status(201).json({
                            status: "Project added"
                        });
                    }     

            });


            
            console.log(newProject)

});


module.exports = router;
