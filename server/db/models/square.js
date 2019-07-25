const Sequelize = require('sequelize')
const db = require('../db')

const Square = db.define('square', {
  square: {
    type: Sequelize.TEXT
  }
})

module.exports = Square
