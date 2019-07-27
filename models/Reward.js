module.exports = (Schema, model) => {
  const Reward = new Schema({
    name: {
      type: String
    },
    points: {
      type: Number
    },
    isClaimed: {
      type: Boolean
    },
    child: {
      type: Schema.Types.ObjectId,
      ref: 'Child'
    }
  })

  return model('Reward', Reward)
}
