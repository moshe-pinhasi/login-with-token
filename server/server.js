const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const http = require('http')
const router = require('./router')
const mongoose = require('mongoose')
const cors = require('cors')
// var session = require('express-session')
var cookieSession = require('cookie-session')

mongoose.connect('mongodb://localhost/login-exaample')

const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(cookieSession({
    name: 'moshe-session',
    keys: ['fewkfkjenwkmdsnjdnewjbdhjebhjdbeh'],
 
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(bodyParser.json({type: '*/*'}))
router(app)

const port = process.env.PORT || 3030
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on: ', port)