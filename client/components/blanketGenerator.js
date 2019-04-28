import React from 'react'
import {connect} from 'react-redux'
import SmallBlock from './smallBlock'
import ToggleBorders from './toggleBorders'

class Blanket extends React.Component {
  constructor() {
    super()
    this.state = {borders: true}
    this.toggleBorders = this.toggleBorders.bind(this)
    this.showHorzBorders = this.showHorzBorders.bind(this)
    this.showVertBorders = this.showVertBorders.bind(this)
  }

  toggleBorders() {
    this.setState({borders: !this.state.borders})
  }

  showHorzBorders() {
    return this.state.borders ? 'horzBorders' : 'noBorders'
  }

  showVertBorders() {
    return this.state.borders ? 'borders' : 'noBorders'
  }

  render() {
    return (
      <div id="blanketMaster">
        <div className={this.showVertBorders()} />
        <div>
          <div className={this.showHorzBorders()} />
          <SmallBlock className={this.showHorzBorders()} />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
        </div>
        <div className={this.showVertBorders()} />
        <div>
          <div className={this.showHorzBorders()} />
          <div className={this.showVertBorders()} />
          <SmallBlock className={this.showHorzBorders()} />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
        </div>
        <div className={this.showVertBorders()} />
        <div>
          <div className={this.showHorzBorders()} />
          <div className={this.showVertBorders()} />
          <SmallBlock className={this.showHorzBorders()} />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
        </div>
        <div className={this.showVertBorders()} />
        <div>
          <div className={this.showHorzBorders()} />
          <div className={this.showVertBorders()} />
          <SmallBlock className={this.showHorzBorders()} />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
          <SmallBlock />
          <div className={this.showHorzBorders()} />
        </div>
        <div className={this.showVertBorders()} />
        <ToggleBorders
          toggle={this.toggleBorders}
          borders={this.state.borders}
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
