module.exports = (Schema, model) => {
  const Chore = new Schema({
    name: {
      type: String
    },
    points: {
      type: Number
    },
    isCompleted: {
      type: Boolean
    },
    isClaimed: {
      type: Boolean
    },
    isBonus: {
      type: Boolean
    },
    child: {
      type: Schema.Types.ObjectId,
      ref: 'Child'
    }
  })

  return model('Chore', Chore)
}
