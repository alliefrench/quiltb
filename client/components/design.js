import React from 'react'
import Palettes from './palettes'
import Block from './block'
import {KonvaBlock} from './konvaBlock'
import {TriangleBlock} from './triangleBlocks'

class DesignMain extends React.Component {
  render() {
    return (
      <div className="container">
        <KonvaBlock />
        <Palettes />
        {/* <TriangleBlock /> */}
      </div>
    )
  }
}

export default DesignMain
