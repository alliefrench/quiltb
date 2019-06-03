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
      palettes: [{id: 0}, {id: 1}]
    }
    this.addPalette = this.addPalette.bind(this)
    this.removePalette = this.removePalette.bind(this)
  }

  addPalette() {
    const palArr = this.state.palettes
    const newId = palArr.length ? palArr[palArr.length - 1].id + 1 : 0
    this.setState({palettes: [...palArr, {id: newId}]})
  }

  removePalette(id) {
    this.setState({
      palettes: this.state.palettes.filter(el => el.id !== id)
    })
  }

  render() {
    const currentColor = this.props.currentColor
    return (
      <div className="colorTools">
        <div id="currentColor" style={{backgroundColor: currentColor}}>
          current color - select below to change
        </div>
        <div className="container">
          <AddPalette addPalette={this.addPalette} />
          <div id="paletteGrid">
            {this.state.palettes.map(el => (
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

export const Palettes = connect(mapState, null)(PalettesView)

export default Palettes
