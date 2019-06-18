import React from 'react'
import {connect} from 'react-redux'
import {saveGrid, tempSaveGrid} from '../store/blocks'

function SavingGridView(props) {
  const save = props.isLoggedIn ? props.saveGrid : props.temporarySave

  return (
    <div
      className="paletteBtn"
      id="saveGrid"
      onClick={() => {
        save(props.buildingGrid.square, props.projectId)
      }}
    >
      Save
    </div>
  )
}

const mapState = state => {
  return {
    buildingGrid: state.blocks.buildingGrid,
    projectId: state.projects.selectedProject.id,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    saveGrid: (grid, projectId) => dispatch(saveGrid(grid, projectId)),
    temporarySave: grid => dispatch(tempSaveGrid(grid))
  }
}

export const SaveGrid = connect(mapState, mapDispatch)(SavingGridView)
