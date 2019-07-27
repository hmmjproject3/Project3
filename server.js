const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const { join } = require('path')
const passport = require('passport')
const { Strategy } = require('passport-local')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const { User } = require('./models')
const { secret } = require('./secret.js')
const app = express()

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/adulting_db'

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('express-session')({
  secret: secret,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new Strategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
}, (jwtPayload, cb) => User.findById(jwtPayload.id)
  .then(user => cb(null, user))
  .catch(err => cb(err, null))
))

require('./routes')(app)
app.get('*', (req, res) => res.sendFile(join(__dirname, 'client', 'build', 'index.html')))

require('mongoose').connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
  .then(_ => app.listen(process.env.PORT || 3001))
  .catch(e => console.log(e))

// mongodb://hizzy:bootcamp2019@ds355357.mlab.com:55357/heroku_nzxvm7k8
