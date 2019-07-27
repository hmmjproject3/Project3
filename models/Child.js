module.exports = (Schema, model) => {
  const Child = new Schema({
    name: {
      type: String
    },
    color: {
      type: String
    },
    totalPoints: {
      type: Number
    },
    chores: [{
      type: Schema.Types.ObjectId,
      ref: 'Chore'
    }],
    rewards: [{
      type: Schema.Types.ObjectId,
      ref: 'Reward'
    }]
  })

  return model('Child', Child)
}
