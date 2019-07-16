const { Child, Chore } = require('../models')


module.exports = app => {
  // GET all Chores
  app.get('/chores', (req, res) => {
    Chore.find({})
      .populate('child')
      .then(chores => {
        res.json(chores)
      })
      .catch(e => console.log(e))
  })

  // POST a chore
  app.post('/chores', (req, res) => {
    Chore.create(req.body)
      .then(({ _id, child }) => {
        Child.updateOne({ _id: child }, { $push: { chores: _id} })
          .then(_ => res.sendStatus(200))
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  })

  //PUT a chore

  app.put('/chores/:id', (req, res) => {
    Chore.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

    //DELETE a chore
    app.delete('/chores/:id', (req, res) => {
      Chore.findByIdAndDelete(req.params.id)
        .then(_ => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}
