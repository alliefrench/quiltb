import React from 'react'
import {connect} from 'react-redux'
import {editGrid} from '../store/blocks'

function EditGrid(props) {
  return (
    <div
      className="editBtn"
      onClick={() => {
        props.updateGrid(props.idx)
      }}
    >
      {' '}
      edit
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    updateGrid: idx => dispatch(editGrid(idx))
  }
}

export const EditGridButton = connect(null, mapDispatch)(EditGrid)
