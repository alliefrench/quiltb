/* eslint-disable react/jsx-key */
import React from 'react'
import blockShrinker from './utils/blockShrinker'
import {connect} from 'react-redux'
import {selectGrid} from '../store/blocks'
import {DeleteGridButton} from './deleteThumbnail'
import {EditGridButton} from './editThumbnail'
import {Thumbnail} from './thumbnail'

class Thumbnails extends React.Component {
  render() {
    const thumbnails = this.props.grids

    return (
      <div className="thumbnailContainer">
        {thumbnails.map((thumbnail, index) => (
          <div>
            <Thumbnail square={thumbnail} />
            <div className="container">
              <DeleteGridButton idx={index} />
              <EditGridButton idx={index} />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
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
