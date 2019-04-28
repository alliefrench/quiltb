import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
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
