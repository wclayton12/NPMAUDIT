// Packages required
const express = require('express')
const mongoose = require('mongoose')
const cookie = require('cookie-parser')
const bodyParser = require('body-parser')


// Url Routes
const signin = require('./routes/signin')
const signup = require('./routes/signup')
const logout = require('./routes/logout')
const update = require('./routes/update')
const check = require('./routes/check')

// Database Connection
mongoose.connect('mongodb://database:27017/angularJwtDB',{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

// Express Middlewares
const app = express()
app.use(express.json())
app.use(cookie())
app.use(bodyParser.urlencoded({extended: true}))
// app.use(cors());

// Express Routes
app.use('/signin', signin)
app.use('/signup', signup)
app.use('/update', update)
app.use('/logout', logout)
app.use('/check', check)


// Initialization of server
app.listen(5000, () => {
    console.log('Server is up and running')
})