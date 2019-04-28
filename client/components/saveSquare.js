import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {saveGrid} from '../store/blocks'
import {saveGridsToLocal} from './utils/localStorage'

function SavingGridView(props) {
  return (
    <div
      className="paletteBtn"
      id="saveGrid"
      onClick={() => {
        props.saveGrid()
      }}
    >
      Save
    </div>
  )
}

const mapState = state => {
  return {
    currColor: state.blocks.currentColor,
    grids: state.blocks.grids
  }
}

const mapDispatch = dispatch => {
  return {
    saveGrid: () => dispatch(saveGrid())
  }
}

export const SaveGrid = connect(mapState, mapDispatch)(SavingGridView)
