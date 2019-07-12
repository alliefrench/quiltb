import React from 'react'
import {connect} from 'react-redux'
import {saveGrid, tempSaveGrid, updateGrid} from '../store/blocks'

function SavingGridView(props) {
  const saveNew = props.isLoggedIn ? props.saveGrid : props.temporarySave

  return (
    <div>
      <div
        className="saveAndResetBtns"
        id="saveGridAsNew"
        onClick={() => {
          saveNew(props.buildingGrid.square, props.projectId)
        }}
      >
        Save New
      </div>
      {props.buildingGrid.id !== null && (
        <div
          className="saveAndResetBtns"
          id="saveGrid"
          onClick={() => {
            props.saveChanges(props.buildingGrid)
          }}
        >
          Save
        </div>
      )}
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
    temporarySave: grid => dispatch(tempSaveGrid(grid)),
    saveChanges: grid => dispatch(updateGrid(grid))
  }
}

export const SaveGrid = connect(mapState, mapDispatch)(SavingGridView)
