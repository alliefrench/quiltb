/* eslint-disable react/jsx-key */
import React from 'react'
import {connect} from 'react-redux'
import {selectGrid} from '../store/blocks'
import {DeleteGridButton} from './deleteThumbnail'
import {EditGridButton} from './editThumbnail'
import {Thumbnail} from './thumbnail'

function Thumbnails(props) {
  return (
    <div className="thumbnailContainer">
      {props.grids.map((grid, index) => (
        <div key={grid.id}>
          <Thumbnail square={grid} />
          <div className="thumbnailBtnsDiv">
            <DeleteGridButton idx={index} id={grid.id} />
            <EditGridButton idx={index} />
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selectedProject: state.projects.selectedProject,
    grids: state.projects.selectedProject.squares
  }
}

const mapDispatch = dispatch => {
  return {
    chooseGrid: index => dispatch(selectGrid(index))
  }
}

export const MakeThumbnail = connect(mapStateToProps, mapDispatch)(Thumbnails)

export default MakeThumbnail
