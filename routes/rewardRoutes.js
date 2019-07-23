const { Reward } = require('../models')
const passport = require('passport')


module.exports = app => {
  // GET all Rewards
  app.get('/rewards', passport.authenticate('jwt', { session: false }), (req, res) => {
    Reward.find({})
      .then(rewards => {
        res.json(rewards)
      })
      .catch(e => console.log(e))
  })

  // Get one Chore
  app.get('/rewards/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Reward.findById(req.params.id)
      .then(reward => {
        res.json(reward)
      })
      .catch(e => console.log(e))
  })

  // POST a reward
  app.post('/rewards', passport.authenticate('jwt', { session: false }), (req, res) => {
    Reward.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  //PUT a reward

  app.put('/rewards/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Reward.findByIdAndUpdate(req.params.id, req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  //DELETE a reward
  app.delete('/rewards/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Reward.findByIdAndDelete(req.params.id)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
