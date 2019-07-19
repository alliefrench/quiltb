import React from 'react'
import {connect} from 'react-redux'
import {getProjects, selectProject} from '../store/projects'
import {resetGrids} from '../store/blocks'
import {Link} from 'react-router-dom'
import {Thumbnail} from './thumbnail'
import {DeleteProjectButton} from './deleteProject'

class UserProjects extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.loadProjects(this.props.userId)
  }

  render() {
    return (
      <div className="projects">
        {this.props.projects ? (
          this.props.projects.map(project => (
            <div
              className="singleProject"
              key={project.id}
              onClick={() => {
                this.props.chooseProject(project.id)
                this.props.resettingGrids()
              }}
            >
              {project.squares &&
                project.squares.length > 0 && (
                  <Thumbnail square={project.squares[0]} />
                )}

              <Link to={`/design/${project.id}`}>{project.name}</Link>
              <DeleteProjectButton squares={project.squares} id={project.id} />
            </div>
          ))
        ) : (
          <div>No projects yet!</div>
        )}
      </div>
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
    loadProjects: id => dispatch(getProjects(id)),
    chooseProject: id => dispatch(selectProject(id)),
    resettingGrids: () => dispatch(resetGrids())
  }
}

export default connect(mapState, mapDispatch)(UserProjects)
