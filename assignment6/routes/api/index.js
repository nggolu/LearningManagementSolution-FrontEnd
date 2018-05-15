const route = require('express').Router()
//route the api

route.use('/courses', require('./course'))
route.use('/students', require('./student'))
route.use('/subjects', require('./subject'))
route.use('/teachers', require('./teacher'))
// route.use('/user', require('./user'))

exports = module.exports = {
    route
}