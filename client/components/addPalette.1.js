import React from 'react'

function ContainedButton(props) {
  return (
    <div>
      <div
        className="paletteBtn"
        onClick={() => {
          props.addColor()
        }}
      >
        add
      </div>
    </div>
  )
}

export default ContainedButton
