import React from 'react'
import InputColor from 'react-input-color'

function ToggleBorders(props) {
  const [color, setColor] = React.useState({})
  return (
    <div className="colorpicker">
      <InputColor
        initialHexColor="#F9AA33"
        onChange={setColor}
        placement="right"
      />
      <div
        className="paletteBtn"
        onClick={() => {
          props.changeColor(color.hex)
        }}
      >
        update border color
      </div>

      <div
        className="paletteBtn"
        id="toggleBordersBtn"
        onClick={() => {
          props.toggle()
        }}
      >
        {props.borders ? <div>remove borders</div> : <div>add borders</div>}
      </div>
    </div>
  )
}

export default ToggleBorders
