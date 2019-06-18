/* eslint-disable no-return-assign */
import React from 'react'
import {connect} from 'react-redux'
import {Stage, Layer, Line} from 'react-konva'
import {updateBlockColor} from '../store/blocks'
import parser from './utils/parser'

function DesignBlock(props) {
  const bigSquare = parser(props.blocks.square)

  return (
    <div id="bigSquare">
      <Stage width={400} height={400} fill="#D9D7D8">
        <Layer>
          {bigSquare.map(triangle => (
            <Line
              key={triangle.id}
              x={triangle.x}
              y={triangle.y}
              points={triangle.points[0]}
              closed
              fill={triangle.fill}
              onClick={() => props.changeColor(triangle.id)}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    blocks: state.blocks.buildingGrid
  }
}

const mapDispatch = dispatch => {
  return {
    changeColor: id => dispatch(updateBlockColor(id))
  }
}

export const KonvaBlock = connect(mapStateToProps, mapDispatch)(DesignBlock)
