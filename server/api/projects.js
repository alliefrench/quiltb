const router = require('express').Router()
const {Project, Square} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll({
      where: {userId: req.user.id},
      include: {model: Square}
    })

    res.json(projects)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const project = await Project.findOne({
      where: {id: req.params.id},
      include: {model: Square}
    })
    res.json(project)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const project = await Project.create(req.body)
    res.send(project)
  } catch (error) {
    next(error)
  }
})

router.delete('/', async (req, res, next) => {
  try {
    const data = await Project.destroy({
      where: {id: req.body.id}
    })
    res.sendStatus(202)
  } catch (error) {
    console.error(error)
  }
})
