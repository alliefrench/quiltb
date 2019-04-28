import React from 'react'
import Palettes from './palettes'
// import Block from './block'
import {KonvaBlock} from './konvaBlock'
import {SaveGrid} from './saveSquare'
import MakeThumbnail from './thumbnails'
import {connect} from 'react-redux'
import GenerateBlanket from './blanketGenerator'
import {ResetGrid} from './resetSquare'
import {StatsCard} from './stats'

class Design extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.savedGrids = this.savedGrids.bind(this)
    this.checkSelectedSquare = this.checkSelectedSquare.bind(this)
  }

  savedGrids() {
    return this.props.grids.length > 0
  }

  checkSelectedSquare() {
    return this.props.selectedGrid.length > 0
  }

  render() {
    return (
      <div className="container">
        <div id="leftRender">
          <div className="blockDesign">
            <KonvaBlock />
            <Palettes />
          </div>
          <div id="save">
            <SaveGrid />
            <ResetGrid />
            {this.savedGrids() && <MakeThumbnail />}
          </div>
          {this.checkSelectedSquare() && <StatsCard />}
        </div>
        <div id="blockRender">
          {this.checkSelectedSquare() && <GenerateBlanket />}
        </div>
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
