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



router.route('/add').post((req,res) => {
  const title = req.body.title;
  const frontEnd= req.body.frontEnd;
  const backEnd=req.body.backEnd;
  const user=req.body.user;
  const  comments=req.body.comments;


  

  const newProject = new Project({
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


router.route('/: id').get((req,res)=> {
  Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: + err'))
});

router.route('/update/: id').post((req,res)=> {
  Project.findById(req.params.id)
    .then(project => {

      const title = req.body.title;
      const frontEnd= req.body.frontEnd;
    const backEnd=req.body.backEnd;
    const user=req.body.user;
    const  comments=req.body.comments;

      project.save()
            .then(() => res.json('Project Updated'))
            .catch(err => res.status(400).json('Error: ' + err));

    })

     .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/: id').delete((req,res)=> {
  Project.findByIdAndDelete(req.params.id)
      .then(()=> res.json('Project deleted'))
      .catch(err => res.status(400).json('Error: ' + err));
      
})

  




module.exports = router;
