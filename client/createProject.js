import React from 'react'
import {connect} from 'react-redux'
import {createProject, selectProject} from './store/projects'

class ProjectForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    const project = {name: this.state.name, userId: this.props.userId}
    evt.preventDefault()
    this.props.addProject(project)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            value={this.state.name}
            placeholder="New Project Name"
            onChange={this.handleChange}
          />
          <button type="submit">Start Project</button>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    addProject: project => dispatch(createProject(project)),
    chooseProject: id => dispatch(selectProject(id))
  }
}

export const AddProjectForm = connect(mapState, mapDispatch)(ProjectForm)
