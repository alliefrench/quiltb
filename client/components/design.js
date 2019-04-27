import React from 'react'
import Palettes from './palettes'
import Block from './block'
import {KonvaBlock} from './konvaBlock'
import {SaveGrid} from './saveSquare'
import MakeThumbnail from './thumbnails'
import {connect} from 'react-redux'
// import {getGrids} from '../store/blocks'
import GenerateBlanket from './blanketGenerator'

class Design extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.savedGrids = this.savedGrids.bind(this)
    this.checkSelectedSquare = this.checkSelectedSquare.bind(this)
  }

  // componentDidMount() {
  //   // this.props.fetchGrids()
  // }

  savedGrids() {
    return this.props.grids.length > 0
  }

  checkSelectedSquare() {
    return this.props.selectedGrid.length > 0
  }

  render() {
    return (
      <div className="container">
        <div>
          <KonvaBlock />
          <div id="save">
            <SaveGrid />
          </div>
        </div>
        <Palettes />
        {this.savedGrids() && <MakeThumbnail />}
        {this.checkSelectedSquare() && <GenerateBlanket />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    grids: state.blocks.grids,
    selectedGrid: state.blocks.selectedGrid
  }
}

const mapDispatch = dispatch => {
  return {
    changeColor: id => dispatch(updateBlockColor(id))
    // fetchGrids: () => dispatch(getGrids())
  }
}

export const DesignMain = connect(mapStateToProps, mapDispatch)(Design)
