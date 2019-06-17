const router = require('express').Router()
const {Squares} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const squares = await Squares.findAll({
      where: {projectId: req.body.projectId}
    })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const square = await Squares.create(req.body)
    res.send(square)
  } catch (error) {
    next(error)
  }
})
