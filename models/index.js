const { Schema, model } = require('mongoose')

module.exports = {
  User: require('./User.js')(Schema, model)
}
