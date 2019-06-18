/* eslint-disable react/jsx-key */
import React from 'react'
import {Stage, Layer, Line} from 'react-konva'
import {selectGrid} from '../store/blocks'
import blockShrinker from './utils/blockShrinker'
import {connect} from 'react-redux'
import parser from './utils/parser'

function DisconnectedThumbnail(props) {
  const {square} = props
  const block = parser(square.square)
  const tinyBlock = blockShrinker(block)

  return (
    <div>
      <div>
        <Stage width={100} height={100} fill="#D9D7D8" className="thumbnails">
          <Layer>
            {tinyBlock.map(triangle => (
              <Line
                key={triangle.id}
                x={triangle.x}
                y={triangle.y}
                points={triangle.points}
                closed
                fill={triangle.fill}
                onClick={() => props.chooseGrid(square.id)}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    chooseGrid: id => dispatch(selectGrid(id))
  }
}

export const Thumbnail = connect(null, mapDispatch)(DisconnectedThumbnail)
