import React from 'react'
import Palettes from './palettes'
import Block from './block'
import {KonvaBlock} from './konvaBlock'
import {SaveGrid} from './saveSquare'
import MakeThumbnail from './thumbnails'
import {connect} from 'react-redux'

class Design extends React.Component {
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
        {/* {this.props.grids && <MakeThumbnail />} */}
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
