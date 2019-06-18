import React from 'react'
import {connect} from 'react-redux'
import {deleteGrid} from '../store/blocks'

function DeleteGrid(props) {
  const identifier = props.id ? props.id : props.idx

  return (
    <div
      className="deleteBtn"
      onClick={() => {
        props.removeGrid(props.isLoggedIn, identifier)
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
    removeGrid: (isLoggedIn, id) => dispatch(deleteGrid(isLoggedIn, id))
  }
}

export const DeleteGridButton = connect(mapState, mapDispatch)(DeleteGrid)
