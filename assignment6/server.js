const  express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/myApp',express.static(path.join(__dirname,'public')))
app.use('/',require('./routes/api').route)

app.listen(8888,()=>console.log("server started at http://localhost:8080/myApp"))