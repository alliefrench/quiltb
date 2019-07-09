import React from 'react'
import {connect} from 'react-redux'
import {setCurrentColor} from '../store/blocks'

function AddColor(props) {
  return (
    <div>
      <div
        // className="paletteBtn"
        id="selectColor"
        onClick={() => {
          props.setCurrColor(props.color)
          props.addColor(props.color)
        }}
        // style={{backgroundColor: props.color}}
      >
        add
      </div>
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

export const ColorSelect = connect(mapState, mapDispatch)(AddColor)
