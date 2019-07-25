const User = require('./user')
const Project = require('./project')
const Square = require('./square')

Project.belongsTo(User)
User.hasMany(Project)
Square.belongsTo(Project)
Project.hasMany(Square)

module.exports = {
  User,
  Project,
  Square
}
