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
      {props.grids.map((square, index) => (
        <div key={square.id}>
          <Thumbnail square={square} />
          <div className="container">
            <DeleteGridButton idx={index} />
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
    grids: state.blocks.grids
  }
}

const mapDispatch = dispatch => {
  return {
    chooseGrid: index => dispatch(selectGrid(index))
  }
}

export const MakeThumbnail = connect(mapStateToProps, mapDispatch)(Thumbnails)

export default MakeThumbnail
