import React from 'react'
import InputColor from 'react-input-color'
import {ColorSelect} from './selectPalette'

function ColorPicker(props) {
  const [color, setColor] = React.useState({})

  return (
    <div id="colorpicker">
      <InputColor
        initialHexColor="#F9AA33"
        onChange={setColor}
        placement="right"
      />
      <ColorSelect color={color.hex} addColor={props.addColor} />
    </div>
  )
}

export default ColorPicker
