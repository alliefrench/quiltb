import React from 'react'
import InputColor from 'react-input-color'

function ToggleBorders(props) {
  const [color, setColor] = React.useState({})
  console.log(props)
  return (
    <div className="container">
      <div id="colorpicker">
        <InputColor
          initialHexColor="#F9AA33"
          onChange={setColor}
          placement="right"
        />
      </div>
      <div>
        <div
          className="paletteBtn"
          id="borderColor"
          onClick={() => {
            props.changeColor(color.hex)
          }}
          style={{backgroundColor: color.hex}}
        >
          update borders
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
    </div>
  )
}

export default ToggleBorders
