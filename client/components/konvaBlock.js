import React from 'react'
import {connect} from 'react-redux'
import Konva from 'konva'
import {Stage, Layer, Rect, Shape, Text, Circle, Line} from 'react-konva'
import {setCurrentColor, updateBlockColor} from '../store/blocks'

// function createBlocks() {
//   const blocks = []
//   const xStart = [0, 100, 200, 300]
//   const yStart = [0, 100, 200, 300]
//   let id = 0

//   for (let i = 0; i < xStart.length; i++) {
//     for (let j = 0; j < yStart.length; j++) {
//       blocks.push({id: id, x: xStart[i], y: yStart[j], color: '#D9D7D8'})
//       id++
//     }
//   }
//   return blocks
// }

class App extends React.Component {
  render() {
    return (
      <Stage width={400} height={400} fill="#D9D7D8">
        <Layer>
          {this.props.blocks.map(triangle => (
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
    currentColor: state.blocks.currentColor,
    blocks: state.blocks.all
  }
}

const mapDispatch = dispatch => {
  return {
    setCurrColor: hex => dispatch(setCurrentColor(hex)),
    changeColor: id => dispatch(updateBlockColor(id))
  }
}

export const KonvaBlock = connect(mapStateToProps, mapDispatch)(App)
