module.exports = (Schema, model) => {
  const Chore = new Schema({
    task: {
      type: String
    },
    points: {
      type: Number
    },
    child: {
      type: Schema.Types.ObjectId,
      ref: 'Child'
    }
  })

  return model('Chore', Chore)
}