import React from 'react'
import InputColor from 'react-input-color'
import {connect} from 'react-redux'
import {setCurrentColor} from '../store/blocks'
import {ColorSelect} from './selectPalette'

function App(props) {
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

const mapState = state => {
  return {
    currColor: state.blocks.currentColor
  }
}

const mapDispatch = dispatch => {
  return {
    setCurrColor: hex => dispatch(setCurrentColor(hex))
  }
}

export const ColorPicker = connect(mapState, mapDispatch)(App)

export default ColorPicker
