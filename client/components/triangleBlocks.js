import React from 'react'
import {connect} from 'react-redux'
import {Stage, Layer, Line} from 'react-konva'
import {setCurrentColor, updateBlockColor} from '../store/blocks'

class App extends React.Component {
  render() {
    return (
      <Stage width={100} height={100} fill="#D9D7D8">
        <Layer>
          <Line
            x={0}
            y={0}
            points={[0, 0, 0, 100, 50, 50]}
            closed
            fill="red"
            onClick={() => this.props.changeColor}
          />
          <Line
            x={0}
            y={0}
            points={[0, 0, 100, 0, 50, 50]}
            closed
            fill="blue"
          />
          <Line
            x={0}
            y={0}
            points={[0, 100, 100, 100, 50, 50]}
            closed
            fill="purple"
          />
          <Line
            x={0}
            y={0}
            points={[100, 100, 100, 0, 50, 50]}
            closed
            fill="green"
          />
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

export const TriangleBlock = connect(mapStateToProps, mapDispatch)(App)
