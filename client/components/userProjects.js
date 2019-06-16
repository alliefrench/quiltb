import React from 'react'
import {connect} from 'react-redux'
import {getProjects} from '../store/projects'

class UserProjects extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.loadProjects(this.props.userId)
  }

  render() {
    return this.props.projects ? (
      this.props.projects.map(project => (
        <div key={project.id}>{project.name}</div>
      ))
    ) : (
      <div>No projects yet!</div>
    )
  }
}

const mapState = state => {
  return {
    userId: state.user.id,
    projects: state.projects.all
  }
}

const mapDispatch = dispatch => {
  return {
    loadProjects: id => dispatch(getProjects(id))
  }
}

export default connect(mapState, mapDispatch)(UserProjects)
