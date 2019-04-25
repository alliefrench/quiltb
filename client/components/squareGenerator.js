import React from 'react'
import ColorPicker from './colorPicker'

class Square extends React.Component {
  constructor() {
    super()
    this.state = {
      paletteCount: 1
    }
  }

  render() {
    return (
      <div>
        <div>Design time</div>
        <br />
        <svg id="squareParent" width="400" height="400">
          <rect
            height="400"
            width="400"
            fill="#CA8181"
            stroke="#B7ADAD"
            strokeWidth="2"
          />
        </svg>
        <button>Select</button>
        <div />
      </div>
    )
  }
}

export default Square
