/* eslint-disable no-return-assign */
import React from 'react'
import {connect} from 'react-redux'
import {Stage, Layer, Line} from 'react-konva'
import {setCurrentColor, updateBlockColor} from '../store/blocks'

class App extends React.Component {
  constructor() {
    super()
    this.state = []
  }

  render() {
    return (
      <div id="bigSquare">
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
      </div>
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
