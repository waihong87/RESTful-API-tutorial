const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const db = 'mongodb://localhost:27017/react-apollo-tutorial'

mongoose.Promise = global.Promise
mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const routes = require('./routes')
routes(app)
app.use((req, res) => {
    res.status(404).send({url:req.originalUrl + ' not found'})
})

app.listen(port)

console.log('Virtual Clinic RESTful API server started on:' + port)