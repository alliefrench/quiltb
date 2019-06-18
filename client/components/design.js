import React from 'react'
import Palettes from './palettes'
import {KonvaBlock} from './konvaBlock'
import {SaveGrid} from './saveSquare'
import MakeThumbnail from './thumbnails'
import {connect} from 'react-redux'
import GenerateBlanket from './altBlanketGenerator'
import {ResetGrid} from './resetSquare'
import {StatsCard} from './stats'
import Instructions from './instructions'

class Design extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.savedGrids = this.savedGrids.bind(this)
  }

  componentDidMount() {}

  savedGrids() {
    return this.props.grids.length > 0
  }

  render() {
    return (
      <div className="container">
        <div id="leftRender">
          <div>
            <Palettes />
            <KonvaBlock />
            <div id="save">
              <SaveGrid />
              <ResetGrid />
            </div>
          </div>
          <div className="dataColumn">
            <div className="thumbnailContainer">
              {!this.savedGrids() && <Instructions />}

              {this.props.selectedProject.squares.length > 0 && (
                <MakeThumbnail squares={this.props.selectedProject.squares} />
              )}
            </div>
          </div>
        </div>

        <div id="blockRender">
          <GenerateBlanket />
          <StatsCard />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedProject: state.projects.selectedProject,
    grids: state.blocks.grids,
    selectedGrid: state.blocks.selectedGrid
  }
}

const mapDispatch = dispatch => {
  return {
    changeColor: id => dispatch(updateBlockColor(id))
  }
}

export const DesignMain = connect(mapStateToProps, mapDispatch)(Design)
