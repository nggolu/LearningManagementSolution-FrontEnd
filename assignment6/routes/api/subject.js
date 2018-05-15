const  route = require('express').Router()
const Subject  = require('../../db').Subject
const Teacher  = require('../../db').Teacher

//post request on http://localhost:8080/subjects/
route.post('/', (req,res)=>{
    // console.log(req)
    // console.log(req.body.name)
    Subject.create({
        name: req.body.name,
        CourseId : req.body.courseid
    }).then((Course)=>{
        res.status(201).send(Course)
    }).catch((err)=>{
        console.log(err)
        res.status(501).send({
        error : "could not retrieve subject "
    })
    })
})

//get request on http://localhost:8080/subjects/
route.get('/', (req, res) =>{
    Subject.findAll().
    then((subjects)=>{
        res.status(200).send(subjects)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve subject "
    })
    })
});

//get request on http://localhost:8080/subjects/5
route.get('/:id', (req, res) =>{

    Subject.findAll({

    where : { id : req.params.id}
    }).
    then((subject)=>{
        res.status(200).send(subject)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve subject "
    })
    })
});

//put request on http://localhost:8080/subjects/5
route.put('/:id', (req, res) =>{

    Subject.find({

    where : { id : req.params.id}
    }).
    then((subject)=>{
        if(subject){
            subject.updateAttributes({
                name : req.body.name
            })
            res.status(200).send(subject)
        }

    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve subject "
    })
    })
});

//delete request on http://localhost:8080/subjects/5
route.delete('/:id', (req, res) =>{

    Subject.find({

    where : { id : req.params.id}
    }).
    then((subject)=>{
        if(subject){
            subject.destroy({
                id : req.body.id
            })
            res.status(200).send(subject)
        }

    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve subject "
    })
    })
});

//get request on http://localhost:8080/subjects/5/teachers
route.get('/:id/teachers', (req, res) =>{

    Teacher.findAll({

        where : { SubjectId : req.params.id},
        include :[Subject]
    }).
    then((subject)=>{
        res.status(200).send(subject)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve subject "
    })
    })
});

//exporting modules
exports = module.exports= route;
