const router = require('express').Router()
const {Projects, Squares} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.findAll({
      where: {userId: req.user.id},
      include: {model: Squares}
    })

    res.json(projects)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const project = await Projects.create(req.body)
    res.send(project)
  } catch (error) {
    next(error)
  }
})
