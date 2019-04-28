import React from 'react'

function ContainedButton(props) {
  return (
    <div>
      <div
        className="paletteBtn"
        onClick={() => {
          props.addPalette()
        }}
      >
        add color
      </div>
    </div>
  )
}

export default ContainedButton
