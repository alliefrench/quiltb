import React from 'react'
import {connect} from 'react-redux'
import {Stage, Layer, Line} from 'react-konva'
import blockShrinker from './utils/blockShrinker'

class Block extends React.Component {
  render() {
    const tinyBlock = blockShrinker(this.props.selectedGrid)

    return (
      <Stage width={100} height={100} fill="#D9D7D8">
        <Layer>
          {tinyBlock.map(triangle => (
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
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedGrid: state.blocks.selectedGrid
  }
}

const mapDispatch = dispatch => {
  return {
    chooseGrid: index => dispatch(selectGrid(index))
  }
}

export const SmallBlock = connect(mapStateToProps, mapDispatch)(Block)

export default SmallBlock
