const Sequelize = require('sequelize')
const db = require('../db')

const Projects = db.define('projects', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = Projects
