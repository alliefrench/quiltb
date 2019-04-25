import React from 'react'

class Square extends React.Component {
  render() {
    return (
      <div>
        <div>Design time</div>
        <svg id="squareParent" height="400" width="400">
          <path
            d="M 100 100 L 200 200 H 10 V 40 H 70"
            fill="#59fa81"
            stroke="#d85b49"
            stroke-width="3"
          />
        </svg>
      </div>
    )
  }
}

export default Square
