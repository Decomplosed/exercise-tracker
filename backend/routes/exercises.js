const router = require('express').Router()
let Exercise = require('../models/exercise.model')

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => req.json(exercises))
    .catch(err => res.status(400).json('Errror: ' + err))
})

router.route('/add').post((req, res) => {
  const username = req.body.username
  const description = req.body.description
  const duration = Number(req.body.duration)
  const date = Date.parse(req.body.date)

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  })

  newExercise
    .save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Errror: ' + err))
})

module.exports = router
