import React from 'react'

function RemoveButton(props) {
  const idx = props.idx
  return (
    <div className="deleteBtn" onClick={() => props.removeColor(idx)}>
      x
    </div>
  )
}

export default RemoveButton
