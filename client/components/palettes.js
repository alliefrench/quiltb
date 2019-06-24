import React from 'react'
import {connect} from 'react-redux'
import ColorPicker from './colorPicker'
import RemoveButton from './removePalette'
import {setCurrentColor} from '../store/blocks'

class PalettesView extends React.Component {
  constructor() {
    super()
    this.state = {
      colors: ['#F9AA33', '#32aafa', '#216897']
    }
    this.addColor = this.addColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  addColor(color) {
    const colorArr = this.state.colors
    this.setState({colors: [...colorArr, color]})
  }

  removeColor(idx) {
    this.setState({
      colors: this.state.colors.filter((el, index) => index !== idx)
    })
  }

  render() {
    const currentColor = this.props.currentColor
    return (
      <div className="colorTools">
        <ColorPicker addColor={this.addColor} />
        <div id="currentColor" style={{backgroundColor: currentColor}}>
          current color - select below to change
        </div>
        <div className="container">
          <div id="paletteGrid">
            {this.state.colors.map((color, index) => (
              <div key={index} className="singlePalette">
                <div
                  className="colorButton"
                  style={{backgroundColor: color}}
                  onClick={() => this.props.setCurrColor(color)}
                />
                <RemoveButton removeColor={this.removeColor} idx={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
const mapState = state => {
  return {
    currentColor: state.blocks.currentColor
  }
}

const mapDispatch = dispatch => {
  return {
    setCurrColor: hex => dispatch(setCurrentColor(hex))
  }
}

export const Palettes = connect(mapState, mapDispatch)(PalettesView)

export default Palettes
