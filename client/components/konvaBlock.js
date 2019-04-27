/* eslint-disable no-return-assign */
import React from 'react'
import {connect} from 'react-redux'
import Konva from 'konva'
import {Stage, Layer, Rect, Shape, Text, Circle, Line} from 'react-konva'
import {setCurrentColor, updateBlockColor} from '../store/blocks'

class App extends React.Component {
  constructor() {
    super()
    this.state = []
    // this.setHoverToggle = this.setHoverToggle.bind(this)
    // this.toggleMouseOver = this.toggleMouseOver.bind(this)
  }

  // componentDidMount() {
  //   const stateObj = {}
  //   for (let i = 0; i < 64; i++) {
  //     stateObj[i] = false
  //   }
  //   this.setState({...stateObj})
  // }

  // setHoverToggle(id) {
  //   const newState = {...this.State}
  //   newState[id] = !newState[id]
  //   this.setState(newState)
  // }
  // toggleMouseOver(id) {
  //   if (this.state.hover === true) {
  //     return this.props.changeColor(id)
  //   }
  // }

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
                // onMouseEnter={this.setHoverToggle(triangle.id)}
                // onMouseLeave={this.setHoverToggle(triangle.id)}
              />
            ))}
          </Layer>
        </Stage>
        {/* <button onClick={() => this.setHoverToggle()} /> */}
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
