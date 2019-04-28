import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit
//   },
//   input: {
//     display: 'none'
//   }
// })

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
