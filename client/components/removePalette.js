import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

function RemoveButton(props) {
  const {classes} = props
  const id = props.elId
  return (
    <div>
      <Button
        variant="contained"
        className={classes.button}
        size="small"
        onClick={() => props.removePalette(id)}
      >
        <Typography variant="h6" color="secondary">
          x
        </Typography>
      </Button>
    </div>
  )
}

RemoveButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RemoveButton)
