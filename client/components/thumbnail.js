/* eslint-disable react/jsx-key */
import React from 'react'
import {Stage, Layer, Line} from 'react-konva'
import {selectGrid} from '../store/blocks'

export function Thumbnail(props) {
  const block = JSON.parse(props.square.square)

  return (
    <div>
      <div>
        <Stage width={100} height={100} fill="#D9D7D8" className="thumbnails">
          <Layer>
            {block.map(triangle => (
              <Line
                key={triangle.id}
                x={triangle.x}
                y={triangle.y}
                points={triangle.points[0]}
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
