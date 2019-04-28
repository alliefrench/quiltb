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

function ContainedButton(props) {
  const {classes} = props
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => {
          props.addPalette()
        }}
      >
        <Typography variant="h6" color="inherit">
          add color
        </Typography>
      </Button>
    </div>
  )
}

ContainedButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ContainedButton)
