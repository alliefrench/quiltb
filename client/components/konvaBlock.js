/* eslint-disable no-return-assign */
import React from 'react'
import {connect} from 'react-redux'
import {Stage, Layer, Line} from 'react-konva'
import {updateBlockColor, changeBlockOpacity} from '../store/blocks'
import parser from './utils/parser'

function DesignBlock(props) {
  const bigSquare = parser(props.blocks.square)

  function mouseEnter(event) {
    props.changeOpacity(event.target.index, 0.5)
  }

  function mouseLeave(event) {
    props.changeOpacity(event.target.index, 1)
  }

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
              opacity={triangle.opacity}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
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
    changeColor: id => dispatch(updateBlockColor(id)),
    changeOpacity: (id, opacity) => {
      dispatch(changeBlockOpacity(id, opacity))
    }
  }
}

export const KonvaBlock = connect(mapStateToProps, mapDispatch)(DesignBlock)
