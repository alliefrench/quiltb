import React from 'react'
import {connect} from 'react-redux'
import {deleteGrid} from '../store/blocks'

function DeleteGrid(props) {
  return (
    <div
      className="deleteBtn"
      onClick={() => {
        props.removeGrid(props.idx)
      }}
    >
      {' '}
      x
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    removeGrid: id => dispatch(deleteGrid(id))
  }
}

export const DeleteGridButton = connect(null, mapDispatch)(DeleteGrid)
