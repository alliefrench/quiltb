import React from 'react'

function Block() {
  return (
    <svg width="400" height="400">
      <rect
        height="400"
        width="400"
        fill="#C6C2C2"
        stroke="#B7ADAD"
        strokeWidth="2"
      />
      {/* Diagonals */}
      {/* Major */}
      <line x1="0" y1="0" x2="400" y2="400" stroke="#529fca" />
      <line x1="0" y1="400" x2="400" y2="0" stroke="#529fca" />
      {/* Minor */}
      <line x1="0" y1="100" x2="300" y2="400" stroke="#529fca" />
      <line x1="0" y1="200" x2="200" y2="400" stroke="#529fca" />
      <line x1="0" y1="300" x2="100" y2="400" stroke="#529fca" />

      <line x1="100" y1="0" x2="400" y2="300" stroke="#529fca" />
      <line x1="200" y1="0" x2="400" y2="200" stroke="#529fca" />
      <line x1="300" y1="0" x2="400" y2="100" stroke="#529fca" />

      <line x1="0" y1="100" x2="100" y2="0" stroke="#529fca" />
      <line x1="0" y1="200" x2="200" y2="0" stroke="#529fca" />
      <line x1="0" y1="300" x2="300" y2="0" stroke="#529fca" />

      <line x1="100" y1="400" x2="400" y2="100" stroke="#529fca" />
      <line x1="200" y1="400" x2="400" y2="200" stroke="#529fca" />
      <line x1="300" y1="400" x2="400" y2="300" stroke="#529fca" />

      {/* Horizontals */}
      <line x1="100" y1="0" x2="100" y2="400" stroke="#529fca" />
      <line x1="200" y1="0" x2="200" y2="400" stroke="#529fca" />
      <line x1="300" y1="0" x2="300" y2="400" stroke="#529fca" />

      {/* Verticals */}
      <line x1="0" y1="100" x2="400" y2="100" stroke="#529fca" />
      <line x1="0" y1="200" x2="400" y2="200" stroke="#529fca" />
      <line x1="0" y1="300" x2="400" y2="300" stroke="#529fca" />
    </svg>
  )
}

export default Block
