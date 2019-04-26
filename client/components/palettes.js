import React from 'react'
import {connect} from 'react-redux'
import ColorPicker from './colorPicker'
import AddPalette from './addPalette'
import RemoveButton from './removePalette'
import {setCurrentColor} from '../store/blocks'

class PalettesView extends React.Component {
  constructor() {
    super()
    this.state = {
      paletteCount: [{id: 0}]
    }
    this.addPalette = this.addPalette.bind(this)
    this.removePalette = this.removePalette.bind(this)
  }

  addPalette() {
    const newId = this.state.paletteCount.length
      ? this.state.paletteCount[this.state.paletteCount.length - 1].id + 1
      : 0
    this.setState({paletteCount: [...this.state.paletteCount, {id: newId}]})
  }

  removePalette(id) {
    this.setState({
      paletteCount: this.state.paletteCount.filter(el => el.id !== id)
    })
  }

  render() {
    const currentColor = this.props.currentColor
    return (
      <div className="container">
        <div className="colorTools">
          <AddPalette addPalette={this.addPalette} />
          <div id="currentColor" style={{backgroundColor: currentColor}}>
            Current Color
          </div>
          <div id="paletteGrid">
            {this.state.paletteCount.map(el => (
              <div key={el.id} className="singlePalette">
                <ColorPicker />
                <RemoveButton removePalette={this.removePalette} elId={el.id} />
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
