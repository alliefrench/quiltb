const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const savedGrids = await Blocks.findOne({
      where: {
        userId: req.user.id
      }
    })
    res.json(savedGrids)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await Blocks.create(req.body)
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})
