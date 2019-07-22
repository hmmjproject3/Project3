const { Child, Chore } = require('../models')
const passport = require('passport')


module.exports = app => {
  // GET all Chores
  app.get('/chores', passport.authenticate('jwt', { session: false }), (req, res) => {
    Chore.find({})
      // .populate('child')
      //deep populate ensures that a reference document with references has its references updated whenever an update or delete route is passed
      //deep populate:
      .populate({
        path: 'child',
        populate: { path: 'chores' }
      })
      .then(chores => {
        res.json(chores)
      })
      .catch(e => console.log(e))
  })

  // Get one Chore
  app.get('/chores/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Chore.findById(req.params.id)
      .populate({
        path: 'child',
        populate: { path: 'chores' }
      })
      .then(chore => {
        res.json(chore)
      })
      .catch(e => console.log(e))
  })

  // POST a chore
  app.post('/chores', passport.authenticate('jwt', { session: false }), (req, res) => {
    Chore.create(req.body)
      .then(({ _id, child }) => {
        Child.updateOne({ _id: child }, { $push: { chores: _id } })
          .then(_ => res.sendStatus(200))
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  })

  //PUT a chore

  app.put('/chores/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Chore.findByIdAndUpdate(req.params.id, req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  //DELETE a chore
  app.delete('/chores/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Chore.findByIdAndDelete(req.params.id)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
