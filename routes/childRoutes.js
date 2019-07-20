const { Child, Chore } = require('../models')


module.exports = app => {
  // GET all Children
  app.get('/children', (req, res) => {
    Child.find({})
      .populate('chores')
      .then(children => {
        res.json(children)
      })
      .catch(e => console.log(e))
  })

  // Get one Child
  app.get('/children/:id', (req, res) => {
    Child.findById(req.params.id)
      .populate('chores')
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

  //POST an array of children
  app.post('/children', (req, res) => {
    Child.insertMany(req.body.childArr)
      .then(_ => console.log(req.body))
      .catch(e => console.log(e))
  })
}
