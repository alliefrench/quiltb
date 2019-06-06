const User = require('./user')
const Projects = require('./projects')
const Squares = require('./squares')

Projects.belongsTo(User)
User.hasMany(Projects)
Squares.belongsTo(Projects)
Projects.hasMany(Squares)

module.exports = {
  User,
  Projects,
  Squares
}
