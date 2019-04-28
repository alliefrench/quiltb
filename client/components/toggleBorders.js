import React from 'react'
// import {connect} from 'react-redux'

function ToggleBorders(props) {
  return (
    <div
      className="paletteBtn"
      id="toggleBordersBtn"
      onClick={() => {
        props.toggle()
      }}
    >
      {props.borders ? <div>remove borders</div> : <div>add borders</div>}
    </div>
  )
}

export default ToggleBorders
