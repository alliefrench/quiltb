import React from 'react'
import InputColor from 'react-input-color'

function App() {
  const [color, setColor] = React.useState({})

  return (
    <div>
      <InputColor
        initialHexColor="#5e72e4"
        onChange={setColor}
        placement="right"
      />
      {/* <div
        style={{
          width: 50,
          height: 50,
          marginTop: 20,
          backgroundColor: color.hex
        }}
      /> */}
    </div>
  )
}

export default App
