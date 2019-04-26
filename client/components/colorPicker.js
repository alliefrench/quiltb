import React from 'react'
import InputColor from 'react-input-color'

function App() {
  const [color, setColor] = React.useState({})
  console.log('colorpicker', color)

  return (
    <div>
      <InputColor
        initialHexColor="#F9AA33"
        onChange={setColor}
        placement="right"
      />
    </div>
  )
}

export default App
