const { Reward, Child } = require('../models')
const passport = require('passport')


module.exports = app => {
  // GET all Rewards
  app.get('/rewards', passport.authenticate('jwt', { session: false }), (req, res) => {
    Reward.find({})
    .populate({
      path: 'child',
      populate: { path: 'rewards'} ,
      // populate: { path: 'chores' }
    })
      .then(rewards => {
        res.json(rewards)
      })
      .catch(e => console.log(e))
  })

  // Get one reward
  app.get('/rewards/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Reward.findById(req.params.id)
    .populate({
      path: 'child',
      populate: { path: 'rewards' }
    })
      .then(reward => {
        res.json(reward)
      })
      .catch(e => console.log(e))
  })

  // POST a reward
  app.post('/rewards', passport.authenticate('jwt', { session: false }), (req, res) => {
    Reward.create(req.body)
      .then(({ _id, child }) => {
        Child.updateOne({ _id: child }, { $push: { rewards: _id } })
          .then(_ => res.sendStatus(200))
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  })

  //PUT a reward
//https://github.com/Automattic/mongoose/issues/1928
  app.put('/rewards/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Reward.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
      populate: {path: 'child', populate: {path: 'rewards'}}
  })
      // .then(_ => res.sendStatus(200))
      .then(({ _id, child }) => {
        Child.updateOne({ _id: child }, { $push: { rewards: _id } })
          .then( _id => 
            res.sendStatus(200)
            // console.log(r)
          
          )
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  })

  //DELETE a reward
  app.delete('/rewards/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Reward.findByIdAndDelete(req.params.id)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}
