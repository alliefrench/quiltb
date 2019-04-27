import React from 'react'
import Palettes from './palettes'
import Block from './block'
import {KonvaBlock} from './konvaBlock'
import {SaveGrid} from './saveSquare'
import MakeThumbnail from './thumbnails'
import {connect} from 'react-redux'

class Design extends React.Component {
  constructor() {
    super()
    this.state = []
    this.savedGrids = this.savedGrids.bind(this)
  }

  savedGrids() {
    return this.props.grids.length > 0
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    grids: state.blocks.grids
  }
}

const mapDispatch = dispatch => {
  return {
    changeColor: id => dispatch(updateBlockColor(id))
  }
}

export const DesignMain = connect(mapStateToProps, mapDispatch)(Design)
