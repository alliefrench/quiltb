import React from 'react'
import {connect} from 'react-redux'
import {saveGrid} from '../store/blocks'

function SavingGridView(props) {
  return (
    <div
      className="paletteBtn"
      id="saveGrid"
      onClick={() => {
        props.saveGrid(props.buildingGrid, props.projectId)
      }}
    >
      Save
    </div>
  )
}

const mapState = state => {
  return {
    buildingGrid: state.blocks.buildingGrid,
    projectId: state.projects.selectedProject.id
  }
}

const mapDispatch = dispatch => {
  return {
    saveGrid: (grid, projectId) => dispatch(saveGrid(grid, projectId))
  }
}

export const SaveGrid = connect(mapState, mapDispatch)(SavingGridView)
