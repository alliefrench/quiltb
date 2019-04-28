import React from 'react'
import {connect} from 'react-redux'
import {resetGrid} from '../store/blocks'

function ResetGridView(props) {
  return (
    <div
      className="paletteBtn"
      id="resetGrid"
      onClick={() => {
        props.clearGrid()
      }}
    >
      Reset
    </div>
  )
}

const mapState = state => {
  return {
    grids: state.blocks.grids
  }
}

const mapDispatch = dispatch => {
  return {
    clearGrid: () => dispatch(resetGrid())
  }
}

export const ResetGrid = connect(mapState, mapDispatch)(ResetGridView)
