import React from 'react'
import {connect} from 'react-redux'
import Konva from 'konva'
import {Stage, Layer, Rect, Text, Circle, Line} from 'react-konva'
import {setCurrentColor, updateBlockColor} from '../store/blocks'

function createBlocks() {
  const blocks = []
  const xStart = [0, 100, 200, 300]
  const yStart = [0, 100, 200, 300]
  let id = 0

  for (let i = 0; i < xStart.length; i++) {
    for (let j = 0; j < yStart.length; j++) {
      blocks.push({id: id, x: xStart[i], y: yStart[j], color: '#D9D7D8'})
      id++
    }
  }
  return blocks
}

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {currentColor: '#F93396', blocks: createBlocks()}
  //   // this.updateColor = this.updateColor.bind(this)
  // }

  // updateColor(id) {
  //   this.setState({
  //     ...this.state,
  //     blocks: this.state.blocks.map(el => {
  //       if (el.id === id) {
  //         return {...el, color: this.props.currentColor}
  //       } else {
  //         return el
  //       }
  //     })
  //   })
  // }

  render() {
    console.log(this.state)
    return (
      <Stage width={400} height={400} fill="#D9D7D8">
        <Layer>
          {this.props.blocks.map(el => (
            <Rect
              className="singleBlock"
              key={el.id}
              x={el.x}
              y={el.y}
              width={100}
              height={100}
              fill={el.color}
              shadowBlur={0}
              onClick={() => this.props.changeColor(el.id)}
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
