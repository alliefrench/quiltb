import React from 'react'
import InputColor from 'react-input-color'
import {ColorSelect} from './selectPalette'

function ColorPicker() {
  const [color, setColor] = React.useState({})

  return (
    <div id="colorpicker">
      <InputColor
        initialHexColor="#F9AA33"
        onChange={setColor}
        placement="right"
      />
      <ColorSelect color={color.hex} />
    </div>
  )
}

export default ColorPicker
