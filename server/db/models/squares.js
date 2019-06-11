const Sequelize = require('sequelize')
const db = require('../db')

const Squares = db.define('squares', {
  square: {
    type: Sequelize.TEXT
  }
})

module.exports = Squares
