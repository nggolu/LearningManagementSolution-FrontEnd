const  route = require('express').Router()
const Teacher  = require('../../db').Teacher
const Subject  = require('../../db').Subject
const Batch  = require('../../db').Batch
const Course  = require('../../db').Course

//post request on http://localhost:8080/teachers
route.post('/', (req,res)=>{

    Teacher.create({
        name: req.body.name,
        SubjectId: req.body.subjectid

    }).then((Course)=>{
        res.status(201).send(Course)
    }).catch((err)=>{
        console.log(err)
    res.status(501).send({
        error : "could not retrieve teacher "
    })
    })
})

//get request on  http://localhost:8080/teachers
route.get('/', (req, res) =>{
    Teacher.findAll().
    then((teachers)=>{
        res.status(200).send(teachers)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve teacher "
    })
    })
});

// get request on  http://localhost:8080/teachers/1
route.get('/:id', (req, res) =>{

    Teacher.findAll({
        where : { id : req.params.id}
    }).
    then((teacher)=>{
        res.status(200).send(teacher)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve teacher "
    })
    })
});

//put reques on  http://localhost:8080/teachers/1
route.put('/:id', (req, res) =>{
    console.log(req.params.id)
    Teacher.find({where : { id : req.params.id}})
    .then((teacher)=>{
        if(teacher){
          //  console.log(teacher)
            teacher.updateAttributes({
                name : req.body.name
            })
            res.status(200).send(teacher);
        }else{
            console.log(" in else")
            res.status(200).send(teacher);
        }

    })
    .catch((err)=>{
       // console.log(err)
        res.status(500).send({
        error : "could not rsdcetrieve teacher "
    })
    })
});

//Delete request on  http://localhost:8080/teachers/1
route.delete('/:id', (req, res) =>{
    // console.log(req.params.id)
    Teacher.find({where : { id : req.params.id}})
    .then((teacher)=>{
        if(teacher){
          //  console.log(teacher)
            teacher.destroy({
                id : req.body.id
            })
            res.status(200).send(teacher);
        }else{
            console.log(" in else")
            res.status(200).send(teacher);
        }

    })
    .catch((err)=>{
       // console.log(err)
        res.status(500).send({
        error : "could not rsdcetrieve teacher "
    })
    })
});
//put request on  http://localhost:8080/teachers
route.put('/', (req, res) =>{
   // console.log(req.params.id)
    Teacher.find({where : { id : req.body.id}})
    .then((teacher)=>{
        if(teacher){
          //  console.log(teacher)
            teacher.updateAttributes({
                name : req.body.name
            })
            res.status(200).send(teacher);
        }else{
            console.log(" in else")
            res.status(200).send(teacher);
        }

    })
    .catch((err)=>{
       // console.log(err)
        res.status(500).send({
        error : "could not rsdcetrieve teacher "
    })
    })
});

//get request on  http://localhost:8080/teachers/1/batches
route.get('/:id/batches', (req, res) =>{
    console.log(req.params.id)
    Teacher.findAll({

        include: [
            {
                model: Subject,
                include: [{
                    model : Course,
                    include : [Batch]
                }]
            }
        ],
        where : { id : req.params.id},
    }).
    then((teacher)=>{
        res.status(200).send(teacher)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
        error : "could not retrieve batches "
    })
    })
});

// exporting modules
exports = module.exports= route;
