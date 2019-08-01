/* eslint-disable no-return-assign */
import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Stage, Layer, Line} from 'react-konva'
import {updateBlockColor, changeBlockOpacity} from '../store/blocks'
import parser from './utils/parser'

function DesignBlock(props) {
  const [opacity, setOpacity] = useState(1)

  const bigSquare = parser(props.blocks.square)

  function mouseEnter(event) {
    props.makeTransparent(event.target)
  }

  function mouseLeave(event) {
    props.makeOpaque(event.target)
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
              opacity={opacity}
              onMouseEnter={e => props.makeTransparent(e.target._id - 2, 0.5)}
              // onMouseOver={mouseEnter}
              onMouseLeave={e => props.makeOpaque(e.target._id - 2, 1)}
              onClick={() => props.changeColor(triangle.id)}
              onM
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
    makeTransparent: (id, opacity) => {
      console.log(id)
      dispatch(changeBlockOpacity(id, opacity))
    },
    makeOpaque: (id, opacity) => dispatch(changeBlockOpacity(id, opacity))
  }
}

export const KonvaBlock = connect(mapStateToProps, mapDispatch)(DesignBlock)
