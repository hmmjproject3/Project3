const { Schema, model } = require('mongoose')

module.exports = {
  User: require('./User.js')(Schema, model),
  Child: require('./Child.js')(Schema, model),
  Chore: require('./Chore.js')(Schema, model),
  Reward: require('./Reward.js')(Schema, model)
}
