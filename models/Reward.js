module.exports = (Schema, model) => {
  const Reward = new Schema({
    name: {
      type: String
    },
    points: {
      type: Number
    },
    isClaime: {
      type: Boolean
    }
  })

  return model('Reward', Reward)
}