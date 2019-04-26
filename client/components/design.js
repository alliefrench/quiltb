import React from 'react'
import Palettes from './palettes'
import Block from './block'
import {KonvaBlock} from './konvaBlock'

class DesignMain extends React.Component {
  render() {
    return (
      <div className="container">
        <KonvaBlock />
        <Palettes />
      </div>
    )
  }
}

export default DesignMain
