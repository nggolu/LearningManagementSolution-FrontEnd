const Sequelize = require('sequelize')
//database connection
const db = new Sequelize('learningmanagement', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',

})
//create course table
const Course = db.define('Course', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    }
})
//create Subject table
const Subject = db.define('Subject', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    }
})

//create teacher table
const Teacher = db.define('Teacher', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    }
})

//create student table
const Student = db.define('Student', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    }
})

////create batcg table
const Batch = db.define('Batch', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
})

//create Lecture table
const Lecture = db.define('Lecture', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    }
})

//create mapper table  of batch ans student mapper class
const Mapper = db.define('batchstudentmapper', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
})

//mapping of course and batch Batch-n----1-course
Batch.belongsTo(Course);
Course.hasMany(Batch);

//mapping of course and subject Subject-n----1-course
Subject.belongsTo(Course);
Course.hasMany(Subject);

//mapping of subject and teacher Teacher-n----1-Subject
Teacher.belongsTo(Subject);
Subject.hasMany(Teacher);

//mapping of lecture and batch lecture-n----1-Batch
Lecture.belongsTo(Batch);
Batch.hasMany(Lecture);

//mapping of Teacher and lecture Lecture-n----1-Teacher
Lecture.belongsTo(Teacher);
Teacher.hasMany(Lecture);

//mapping of Mapper and student Mapper-n----1-Student
Mapper.belongsTo(Student);
Student.hasMany(Mapper);

//mapping of Mapper and Batch  Mapper-n----1-Batch
Mapper.belongsTo(Batch);
Batch.hasMany(Mapper);

//Sync the databse and checking the connection while printing on console
db.sync()
    .then(()=>console.log("database has been connected"))
    .catch((err)=>console.log("error connectiong with db"))

//export modules
exports = module.exports =  {
    Course,Subject,Teacher,Student,Batch,Mapper,Lecture
}