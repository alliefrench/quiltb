import React from 'react'

function RemoveButton(props) {
  // const {classes} = props
  const id = props.elId
  return (
    <div className="paletteBtn" onClick={() => props.removePalette(id)}>
      remove
    </div>
  )
}

export default RemoveButton
