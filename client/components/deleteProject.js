import React from 'react'
import {connect} from 'react-redux'
import {deleteGrid} from '../store/blocks'
import {deleteProject} from '../store/projects'

function DeleteProject(props) {
  return (
    <div
      className="deleteBtn"
      onClick={() => {
        console.log('delete props', props)
        props.removeProject(props.id)
        props.squares.forEach(square =>
          props.removeGrid(props.isLoggedIn, square.id)
        )
      }}
    >
      x
    </div>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    removeProject: id => dispatch(deleteProject(id)),
    removeGrid: (isLoggedIn, id) => dispatch(deleteGrid(isLoggedIn, id))
  }
}

export const DeleteProjectButton = connect(mapState, mapDispatch)(DeleteProject)
