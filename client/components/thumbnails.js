import React from 'react'
import blockShrinker from './utils/blockShrinker'
import {connect} from 'react-redux'
import {Stage, Layer, Shape, Line} from 'react-konva'

class Thumbnails extends React.Component {
  render() {
    console.log(this.props.grids[0])
    // const thumbnail = blockShrinker(this.props.grids[0])
    return (
      <Stage width={40} height={40} fill="#D9D7D8">
        <Layer>
          {thumbnail.map(triangle => (
            <Line
              key={triangle.id}
              x={triangle.x}
              y={triangle.y}
              points={triangle.points[0]}
              closed
              fill={triangle.fill}
              onClick={() => this.props.changeColor(triangle.id)}
            />
          ))}
        </Layer>
      </Stage>
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
    changeColor: id => dispatch(updateBlockColor(id))
  }
}

export const MakeThumbnail = connect(mapStateToProps, mapDispatch)(Thumbnails)

export default MakeThumbnail
