/* eslint-disable react/jsx-key */
import React from 'react'
import {connect} from 'react-redux'
import {selectGrid} from '../store/blocks'
import {DeleteGridButton} from './deleteThumbnail'
import {EditGridButton} from './editThumbnail'
import {Thumbnail} from './thumbnail'

function Thumbnails(props) {
  let {squares} = props

  return (
    <div className="thumbnailContainer">
      {squares.map((square, index) => (
        <div>
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
