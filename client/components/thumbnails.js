/* eslint-disable react/jsx-key */
import React from 'react'
import blockShrinker from './utils/blockShrinker'
import {connect} from 'react-redux'
import {Stage, Layer, Shape, Line} from 'react-konva'
import {selectGrid} from '../store/blocks'

class Thumbnails extends React.Component {
  // handleExportClick = () => {
  //   console.log(this.stageRef.getStage().toDataURL());
  // }
  render() {
    // const thumbnail = blockShrinker(this.props.grids[0])

    const thumbnails = this.props.grids.map(grid => blockShrinker(grid))

    return (
      <div>
        {thumbnails.map((thumbnail, index) => (
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
