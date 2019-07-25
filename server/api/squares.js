const router = require('express').Router()
const {Square} = require('../db/models')
module.exports = router

router.get('/:projectId', async (req, res, next) => {
  try {
    const squares = await Square.findAll({
      where: {projectId: req.params.projectId}
    })
    res.send(squares)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const square = await Square.create(req.body)
    res.send(square)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const square = await Square.update(
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
  try {
    const data = await Square.destroy({
      where: {id: req.body.id}
    })
    res.sendStatus(202)
  } catch (error) {
    console.error(error)
  }
})
