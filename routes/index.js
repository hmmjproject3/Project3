module.exports = app => {
  require('./userRoutes.js')(app)
  require('./childRoutes.js')(app)
  require('./choreRoutes.js')(app)
  require('./rewardRoutes')(app)
}
