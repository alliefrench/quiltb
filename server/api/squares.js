const router = require('express').Router()
const {Squares} = require('../db/models')
module.exports = router

router.get('/:projectId', async (req, res, next) => {
  try {
    const squares = await Squares.findAll({
      where: {projectId: req.params.projectId}
    })
    res.send(squares)
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

router.put('/:id', async (req, res, next) => {
  try {
    const square = await Squares.update(
      {
        square: req.body.square
      },
      {where: {id: req.params.id}, returning: true}
    )
    res.send(square)
  } catch (error) {
    console.error(error)
  }
})

router.delete('/', async (req, res, next) => {
  console.log('sq delete route', req.body)
  try {
    const data = await Squares.destroy({
      where: {id: req.body.id}
    })
    res.sendStatus(202)
  } catch (error) {
    console.error(error)
  }
})
