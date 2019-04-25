import React from 'react'
import ColorPicker from './colorPicker'
import AddPalette from './addPalette'
import RemoveButton from './removePalette'
import Block from './block'

class Square extends React.Component {
  constructor() {
    super()
    this.state = {
      paletteCount: [{id: 0}]
    }
    this.addPalette = this.addPalette.bind(this)
    this.removePalette = this.removePalette.bind(this)
  }

  addPalette() {
    const newId =
      this.state.paletteCount[this.state.paletteCount.length - 1].id + 1
    this.setState({paletteCount: [...this.state.paletteCount, {id: newId}]})
  }

  removePalette(id) {
    this.setState({
      paletteCount: this.state.paletteCount.filter(el => el.id !== id)
    })
  }

  render() {
    return (
      <div className="container">
        <Block />
        <div className="colorTools">
          <AddPalette addPalette={this.addPalette} />
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

export default Square
