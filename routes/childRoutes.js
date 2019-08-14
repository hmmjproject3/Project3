const { Child, Chore } = require('../models')
const passport = require('passport')

module.exports = app => {
  // GET all Children
  app.get('/:parent/children', passport.authenticate('jwt', { session: false }), (req, res) => {
    Child.find({parent: req.params.parent})
      // .populate('chores')
      // .populate('rewards')
      .populate([{
        path: 'chores'
        // model: 'Chore'
      }, {
        path: 'rewards'
        // model: 'Reward'
      }])
      .then(children => {
        res.json(children)
        // console.log(children)
      })
      .catch(e => console.log(e))
  })

  // Get one Child
  app.get('/children/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Child.findById(req.params.id)
      // .populate('chores')
      // .populate('rewards')
      .populate([{
        path: 'chores'
        // model: 'Chore'
      }, {
        path: 'rewards'
        // model: 'Reward'
      }])
      .then(child => {
        res.json(child)
      })
      .catch(e => console.log(e))
  })

  // POST a child
  // app.post('/children', (req, res) => {
  //   Child.create(req.body)
  //     .then(_ => res.sendStatus(200))
  //     .catch(e => console.log(e))
  // })

  // POST an array of children
  app.post('/children', passport.authenticate('jwt', { session: false }), (req, res) => {
    Child.insertMany(req.body.childArr)
      .then(_ => console.log(req.body))
      .catch(e => console.log(e))
  })

  // PUT a child

  app.put('/children/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Child.findByIdAndUpdate(req.params.id, req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
