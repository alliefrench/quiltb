/* eslint-disable react/jsx-key */
import React from 'react'
import {Stage, Layer, Line} from 'react-konva'
import {selectGrid} from '../store/blocks'
import blockShrinker from './utils/blockShrinker'

export function Thumbnail(props) {
  const {square} = props
  const block = JSON.parse(square.square)
  const tinyBlock = blockShrinker(block)
  console.log('block', tinyBlock)

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
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  )
}
