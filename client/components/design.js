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
import {getGrids} from '../store/blocks'
import {selectProject} from '../store/projects'

class Design extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.savedGrids = this.savedGrids.bind(this)
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.chooseProject(parseInt(this.props.match.params.id))
    }
    // this.props.fetchGrids(this.props.isLoggedIn, this.props.match.param s.id)
  }

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
              <ResetGrid />
              <SaveGrid />
            </div>
          </div>
          <div className="dataColumn">
            <div className="thumbnailContainer">
              {!this.savedGrids() && <Instructions />}

              {this.props.grids.length > 0 && <MakeThumbnail />}
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
    grids: state.projects.selectedProject.squares,
    selectedGrid: state.blocks.selectedGrid,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    fetchGrids: (isLoggedIn, projectId) =>
      dispatch(getGrids(isLoggedIn, projectId)),
    chooseProject: id => dispatch(selectProject(id)),
    changeColor: id => dispatch(updateBlockColor(id))
  }
}

export const DesignMain = connect(mapStateToProps, mapDispatch)(Design)
