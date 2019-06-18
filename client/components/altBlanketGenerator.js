import React from 'react'
import {connect} from 'react-redux'
import SmallBlock from './smallBlock'
import {Thumbnail} from './thumbnail'
import ToggleBorders from './toggleBorders'

class Blanket extends React.Component {
  constructor() {
    super()
    this.state = {borders: true, borderColor: '#f9aa33'}
    this.toggleBorders = this.toggleBorders.bind(this)
    this.showInsideBorders = this.showInsideBorders.bind(this)
    this.showEdgeBorders = this.showEdgeBorders.bind(this)
    this.updateBorderColor = this.updateBorderColor.bind(this)
  }

  toggleBorders() {
    this.setState({...this.state, borders: !this.state.borders})
  }

  showInsideBorders() {
    return this.state.borders ? 'insideBorders' : ''
  }

  showEdgeBorders() {
    return this.state.borders ? 'borders' : 'noBorders'
  }

  updateBorderColor(color) {
    this.setState({...this.state, borderColor: color})
  }

  render() {
    let squareCount = []
    for (let i = 0; i < 20; i++) {
      squareCount[i] = 1
    }
    return (
      <div>
        <ToggleBorders
          toggle={this.toggleBorders}
          borders={this.state.borders}
          changeColor={this.updateBorderColor}
        />
        <div
          id="rightSide"
          className={this.showEdgeBorders()}
          style={{backgroundColor: this.state.borderColor}}
        >
          {squareCount.map((el, idx) => (
            // eslint-disable-next-line react/jsx-key
            <div
              className={this.showInsideBorders()}
              style={{backgroundColor: this.state.borderColor}}
              key={idx}
            >
              <SmallBlock />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedGrid: state.blocks.selectedGrid
  }
}

const mapDispatch = dispatch => {
  return {
    chooseGrid: index => dispatch(selectGrid(index))
  }
}

export const GenerateBlanket = connect(mapStateToProps, mapDispatch)(Blanket)

export default GenerateBlanket
