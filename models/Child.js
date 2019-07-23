module.exports = (Schema, model) => {
  const Child = new Schema({
    name: {
      type: String
    },
    totalPoints: {
      type: Number
    },
    chores: [{
      type: Schema.Types.ObjectId,
      ref: 'Chore'
    }],
  })

  return model('Child', Child)
}