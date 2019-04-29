import React from 'react'
import {connect} from 'react-redux'
import SmallBlock from './smallBlock'
import ToggleBorders from './toggleBorders'

class Blanket extends React.Component {
  constructor() {
    super()
    this.state = {borders: true, borderColor: '#f9aa33'}
    this.toggleBorders = this.toggleBorders.bind(this)
    this.showHorzBorders = this.showHorzBorders.bind(this)
    this.showVertBorders = this.showVertBorders.bind(this)
    this.updateBorderColor = this.updateBorderColor.bind(this)
  }

  toggleBorders() {
    this.setState({...this.state, borders: !this.state.borders})
  }

  showHorzBorders() {
    return this.state.borders ? 'horzBorders' : 'noBorders'
  }

  showVertBorders() {
    return this.state.borders ? 'borders' : 'noBorders'
  }

  updateBorderColor(color) {
    this.setState({...this.state, borderColor: color})
  }

  render() {
    return (
      <div id="rightSide">
        <div id="blanketMaster">
          <div
            className={this.showVertBorders()}
            style={{backgroundColor: this.state.borderColor}}
          />
          <div>
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
          </div>
          <div
            className={this.showVertBorders()}
            style={{backgroundColor: this.state.borderColor}}
          />
          <div>
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <div
              className={this.showVertBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
          </div>
          <div
            className={this.showVertBorders()}
            style={{backgroundColor: this.state.borderColor}}
          />
          <div>
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <div
              className={this.showVertBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
          </div>
          <div
            className={this.showVertBorders()}
            style={{backgroundColor: this.state.borderColor}}
          />
          <div>
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <div
              className={this.showVertBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
            <SmallBlock />
            <div
              className={this.showHorzBorders()}
              style={{backgroundColor: this.state.borderColor}}
            />
          </div>
          <div
            className={this.showVertBorders()}
            style={{backgroundColor: this.state.borderColor}}
          />
        </div>
        <ToggleBorders
          toggle={this.toggleBorders}
          borders={this.state.borders}
          changeColor={this.updateBorderColor}
        />
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
