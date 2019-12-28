var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var Schema = mongoose.Schema

// var projectSchema = new Schema({


// title:String,
// frontEnd: String,
// backEnd: String,
// user: String,
// comments: String,









// });

// var project = mongoose.model('project',projectSchema);
const project = require('../models/project')

/* GET home page. */
// const projects = ['the good project', 'the best project', 'this projects']
let allProjects = [];
router.get('/', function(req, res, next) {

    res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      console.log('ALLPROJECTS:',JSON.stringify(allProjects));
    res.send(JSON.stringify(allProjects));
//    const allProjects = project.find

//    console.log(allProjects);
});


module.exports = router;

router.post('/projects',function(req,res,next){
    

            const newProject = new project(req.body);

            console.log(req.body);
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


            allProjects.push(newProject);
            console.log(allProjects)

});