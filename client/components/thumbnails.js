/* eslint-disable react/jsx-key */
import React from 'react'
import blockShrinker from './utils/blockShrinker'
import {connect} from 'react-redux'
import {Stage, Layer, Line} from 'react-konva'
import {selectGrid} from '../store/blocks'
import {DeleteGridButton} from './deleteThumbnail'
import {EditGridButton} from './editThumbnail'

class Thumbnails extends React.Component {
  render() {
    const thumbnails = this.props.grids.map(grid => blockShrinker(grid))

    return (
      <div className="thumbnailContainer">
        {thumbnails.map((thumbnail, index) => (
          <div>
            <Stage
              width={100}
              height={100}
              fill="#D9D7D8"
              key={index}
              onClick={() => this.props.chooseGrid(index)}
              className="thumbnails"
            >
              <Layer>
                {thumbnail.map(triangle => (
                  <Line
                    key={triangle.id}
                    x={triangle.x}
                    y={triangle.y}
                    points={triangle.points}
                    closed
                    fill={triangle.fill}
                  />
                ))}
              </Layer>
            </Stage>
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
