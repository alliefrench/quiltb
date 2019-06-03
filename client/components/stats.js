import React from 'react'
import {connect} from 'react-redux'
import {
  sumByColor,
  totalAreaPerTriangle,
  totalAreaByColor
} from './utils/areaCalc'

class Stats extends React.Component {
  constructor() {
    super()
    this.state = {width: 60}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      width: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({width: event.target.value})
  }

  render() {
    const countByColor = sumByColor(this.props.selectedGrid)
    const triangleArea = totalAreaPerTriangle(this.state.width)
    const areaByColor = totalAreaByColor(countByColor, triangleArea)
    const colorKeys = Object.keys(areaByColor)

    return (
      <div className="areaStatsDiv">
        <form id="areaForm" onSubmit={this.handleSumbit}>
          <div>
            {`width: `}
            <input
              type="number"
              name="width"
              value={this.state.width}
              required={true}
              onChange={this.handleChange}
              style={{width: 40, height: 25}}
            />
            {` in.`}
            <br />
            sq inches by color:
          </div>
        </form>
        <div className="colorInches">
          {colorKeys.map(color => (
            <div
              key={color}
              style={{backgroundColor: color}}
              className="areaField"
            >
              {areaByColor[color]}
            </div>
          ))}
        </div>
      </div>
    )
  }
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
