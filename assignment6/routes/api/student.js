const  route = require('express').Router()
const Student  = require('../../db').Student
const Batch  = require('../../db').Batch
const Mapper  = require('../../db').Mapper

//post request on http://localhost:8080/students/
route.post('/', (req,res)=>{
    // console.log(req)
    // console.log(req.body.name)
    Student.create({
        name: req.body.name
    }).then((Course)=>{
    res.status(201).send(Course)
    }).catch((err)=>{
        console.log(err)
        res.status(501).send({
        error : "could not retrieve student "
    })
    })
})

// get request on http://localhost:8080/students/
route.get('/', (req, res) =>{
    Student.findAll().
    then((students)=>{
        res.status(200).send(students)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve student "
    })
    })
});

// put request on http://localhost:8080/students/
route.put('/', (req, res) =>{
    Student.find({ where: { id: req.body.id } })
    .then((student)=>{
    if(student){
        student.updateAttributes({
            name : req.body.name
        })
        res.status(200).send(student)
    }
    })
    .then((student)=>{
        res.status(200).send(student)
    })
    .catch((err)=>{
        res.status(500).send({
            error : "could not retrieve Course "
        })
    })
});

//delete request on http://localhost:8080/students/5
route.delete('/:id', (req, res) =>{
    Student.find({ where: { id: req.params.id } })
    .then((student)=>{
    if(student){
        student.destroy({
            id : req.body.id
        })
        res.status(200).send(student)
    }
    })
    .then((student)=>{
        res.status(200).send(student)
    })
    .catch((err)=>{
        res.status(500).send({
            error : "could not retrieve Course "
        })
    })
});

//get request on http://localhost:8080/students/5
route.get('/:id', (req, res) =>{

    Student.findAll({

    where : { id : req.params.id}
    }).
    then((students)=>{
        res.status(200).send(students)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve student "
    })
    })
});

// put request on http://localhost:8080/students/2
route.put('/:id', (req, res) =>{
    Student.find({ where: { id: req.params.id } })
    .then((student)=>{
    if(student){
        student.updateAttributes({
            name : req.body.name
        })
        res.status(200).send(student)
    }
    })
    .then((student)=>{
        res.status(200).send(student)
    })
    .catch((err)=>{
        res.status(500).send({
            error : "could not retrieve Course "
        })
    })
});


//get request on http://localhost:8080/students/3/batches
route.get('/:id/batches', (req, res) =>{

    Mapper.findAll({

        where : { StudentId : req.params.id},
        include:[Batch,Student]
    }).
    then((subject)=>{
        res.status(200).send(subject)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve student "
    })
    })
});

//exports this module
exports = module.exports= route;
