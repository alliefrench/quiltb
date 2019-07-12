import React from 'react'
import {connect} from 'react-redux'
import {resetGrid} from '../store/blocks'

function ResetGridView(props) {
  return (
    <div
      className="saveAndResetBtns"
      id="resetGrid"
      onClick={() => {
        props.clearGrid()
      }}
    >
      Reset
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    clearGrid: () => dispatch(resetGrid())
  }
}

export const ResetGrid = connect(null, mapDispatch)(ResetGridView)
