import React from 'react'
import {connect} from 'react-redux'
import {saveGrid} from '../store/blocks'

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

const mapDispatch = dispatch => {
  return {
    saveGrid: () => dispatch(saveGrid())
  }
}

export const SaveGrid = connect(null, mapDispatch)(SavingGridView)
