import React from 'react'
import {connect} from 'react-redux'
import {Stage, Layer, Shape, Line} from 'react-konva'
import SmallBlock from './smallBlock'

class Blanket extends React.Component {
  render() {
    const blanket = [1, 1, 1, 1]
    return (
      <div id="blanketMaster">
        <div className="blanket">
          {blanket.map((el, index) => (
            // <div id="square" key={index}>
            <SmallBlock />
            // </div>
          ))}
        </div>
        <div className="blanket">
          {blanket.map((el, index) => (
            // <div id="square" key={index}>
            <SmallBlock />
            // </div>
          ))}
        </div>
        <div className="blanket">
          {blanket.map((el, index) => (
            // <div id="square" key={index}>
            <SmallBlock />
            // </div>
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
