import React from 'react'
import {connect} from 'react-redux'
import {
  sumByColor,
  totalAreaPerTriangle,
  totalAreaByColor
} from './utils/areaCalc'

const Stats = props => {
  const width = 60
  const countByColor = sumByColor(props.selectedGrid)
  const triangleArea = totalAreaPerTriangle(width)
  const areaByColor = totalAreaByColor(countByColor, triangleArea)
  const colorKeys = Object.keys(areaByColor)
  // console.log('countByColor', countByColor)
  // console.log('triangle area', triangleArea)
  // console.log('area by color', areaByColor)
  return (
    <div>
      {colorKeys.map(color => (
        <div key={color} style={{backgroundColor: color}} id="areaField">
          {color}: {areaByColor[color]} sq in
        </div>
      ))}
    </div>
  )
}

const mapState = state => {
  return {
    selectedGrid: state.blocks.selectedGrid
  }
}

const mapDispatch = dispatch => {
  return {
    saveGrid: () => dispatch(saveGrid())
  }
}

export const StatsCard = connect(mapState, mapDispatch)(Stats)
