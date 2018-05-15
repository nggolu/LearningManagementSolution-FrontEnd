const  route = require('express').Router()
const Course  = require('../../db').Course
const Batch = require('../../db').Batch
const Lecture = require('../../db').Lecture
const Student = require('../../db').Student
const Mapper = require('../../db').Mapper
const Teacher = require('../../db').Teacher

//post request on http://localhost:8080/courses/
route.post('/', (req,res)=>{

    Course.create({
        name: req.body.name
    }).then((Course)=>{
        res.status(201).send(Course)
    }).catch((err)=>{
        console.log(err)
        res.status(501).send({
        error : "could not retrieve Course "
    })
    })
})
// put request on http://localhost:8080/courses/
route.put('/', (req,res)=>{
    // console.log(req)
    // console.log(req.body.name)
    Course.find({ where: { id: req.body.id } })
    .then((course)=>{
         if(course){
             course.updateAttributes({
                 name : req.body.name
             })
             res.status(200).send(course)
         }
    })
    .then((course)=>{
    res.status(200).send(course)
    })
    .catch((err)=>{
        res.status(500).send({
            error : "could not retrieve Course "
        })
    })
});
// delete request on http://localhost:8080/courses/3
route.delete('/:id', (req,res)=>{
    // console.log(req)
    // console
    Course.find({ where: { id: req.params.id } })
    .then((course)=>{
         if(course){
             course.destroy({
                 where: {
                     id : req.params.id
                 }
             })
             res.status(200).send(course)
         }
    })
    .then((course)=>{
    res.status(200).send(course)
    })
    .catch((err)=>{
        res.status(500).send({
            error : "could not retrieve Course "
        })
    })
});
// get request on http://localhost:8080/courses/
route.get('/', (req, res) =>{
    Course.findAll().
    then((course)=>{
        res.status(200).send(course)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve Course "
    })
    })
});

//get request on http://localhost:8080/courses/3
route.get('/:id', (req, res) =>{

    Course.findAll({

        where : { id : req.params.id}
    }).
    then((course)=>{
        res.status(200).send(course)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve Course "
    })
    })
});

// get request on http://localhost:8080/courses/3/batches
route.get('/:courseId/batches', (req, res) =>{

    Batch.findAll({
        include: [
            {
                model: Course
            }
        ],
        where : { CourseId : req.params.courseId}
    }).
    then((course)=>{
        res.status(200).send(course)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve Course "
    })
    })
});
// post request on http://localhost:8080/courses/3/batches
route.post('/:courseId/batches', (req, res) =>{

    Batch.create({
        name : req.body.name,
        CourseId : req.params.courseId
    }).
    then((course)=>{
        res.status(200).send(course)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve Course "
    })
    })
});

//get request on http://localhost:8080/courses/3/batches/1
route.get('/:courseId/batches/:batchId', (req, res) =>{
    Batch.findAll({
        include: [
            {
                model: Course
            }
        ],
        where : {
            CourseId : req.params.courseId,
            id : req.params.batchId
        }
    }).
    then((course)=>{
        res.status(200).send(course)
    })
    .catch((err)=>{
        res.status(500).send({
        error : "could not retrieve Course "
    })
    })
});
//get request on http://localhost:8080/courses/3/batches/1/lectures
route.get('/:courseId/batches/:batchId/lectures', (req, res) =>{
    Lecture.findAll({

        where : {
            BatchId : req.params.batchId
        },
        include: [
            {
                model: Batch,
                include:[Course]
            }
        ]
    }).
    then((course)=>{
        res.status(200).send(course)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
        error : "could not retrieve Course "
    })
    })
});
//post request on http://localhost:8080/courses/3/batches/1/lectures
route.post('/:courseId/batches/:batchId/lectures', (req, res) =>{
    Lecture.create({
            BatchId : req.params.batchId,
            TeacherId : req.body.teacherId,
            name : req.body.name
    }).
    then((course)=>{
        res.status(200).send(course)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
        error : "could not retrieve Course "
    })
    })
});
//get request on http://localhost:8080/courses/3/batches/1/lectures/1
route.get('/:courseId/batches/:batchId/lectures/:lectureid', (req, res) =>{
    Lecture.findAll({

        where : {
            id : req.params.lectureid,
            BatchId : req.params.batchId
        },
        include: [
            {
                model: Batch,
                include:[Course]
            }
        ]
    }).
    then((course)=>{
        res.status(200).send(course)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
        error : "could not retrieve Course "
    })
    })
});
//get request on http://localhost:8080/courses/3/batches/1/students
route.get('/:courseId/batches/:batchId/students', (req, res) =>{
    Mapper.findAll({

        where : {
            BatchId : req.params.batchId
        },
        include: [Student,{

                        model:Batch,
                        include :[Course]
                }],



    }).
    then((course)=>{
        res.status(200).send(course)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
        error : "could not retrieve Course "
    })
    })
});
//post request on http://localhost:8080/courses/3/batches/1/students
route.post('/:courseId/batches/:batchId/students', (req, res) =>{
    Mapper.create({
            BatchId : req.params.batchId,
            StudentId : req.body.studentId
    }).
    then((course)=>{
        res.status(200).send(course)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
        error : "could not retrieve Course "
    })
    })
});
//get request on http://localhost:8080/courses/3/batches/1/teachers
route.get('/:courseId/batches/:batchId/teachers', (req, res) =>{
    Lecture.findAll({

        where : {
            BatchId : req.params.batchId
        },
        include: [Teacher,{

                        model:Batch,
                        include :[Course]
                }],



    }).
    then((course)=>{
        res.status(200).send(course)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
        error : "could not retrieve Course "
    })
    })
});


//exports the route
exports = module.exports= route;
