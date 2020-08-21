const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/connection')
const app = express()

// router
const userRouter = require('./routes/User')
const moviesRouter = require('./routes/Movies')
const subscriptionsRouter = require('./routes/Subscriptions')
const historyRouter = require('./routes/HistoryWatch')

// models
const User = require('./models/User')
const Movies = require('./models/Movies')
const Subscriptions = require('./models/Subscriptions')
const HistoryWatch = require('./models/HistoryWatch')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// sequelize up connection
db
.authenticate()
.then(()=> {
    console.log('Database Sequelize connected...')
})
.then(()=> {
    User.sync().then(()=> console.log('Table User created'))
    Movies.sync().then(()=> console.log('Table Movie created'))
    Subscriptions.sync().then(()=> console.log('Table Subs created'))
    HistoryWatch.sync().then(()=> console.log('Table History created'))
})
.catch(err => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.send('welcome')
})

app.use('/', userRouter)
app.use('/', moviesRouter)
app.use('/', subscriptionsRouter)
app.use('/', historyRouter)

app.listen(4001, ()=> {
    console.log('Server is running...')
})