const Sequelize = require('sequelize')
const db = require('../db')

const Blocks = db.define('blocks', {
  squares: {
    type: Sequelize.ARRAY(Number)
  }
})

module.exports = Blocks
