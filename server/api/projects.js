const router = require('express').Router()
const {Projects} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.findAll({
      where: {
        userId: req.id
      }
    })
    res.send(projects)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const project = Projects.create(req.body)
    res.send(project)
  } catch (error) {
    next(error)
  }
})
