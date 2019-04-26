import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {setCurrentColor} from '../store/blocks'
import teal from '@material-ui/core/colors/teal'
import classNames from 'classnames'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  // attempt to override MUI styling
  root: {
    color: 'teal'
  }
})

function SelectPalette(props) {
  const {classes, className} = props
  return (
    <div>
      <Button
        className={classNames(classes.root, className)}
        id="selectColor"
        variant="contained"
        size="small"
        fontSize="small"
        color="primary"
        className={classes.button}
        onClick={() => {
          props.setCurrColor(props.color)
        }}
      >
        <Typography variant="h6" color="secondary">
          {`<--`}
        </Typography>
      </Button>
    </div>
  )
}

SelectPalette.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

const SelectButton = withStyles(styles)(SelectPalette)

const mapState = state => {
  return {
    currColor: state.blocks.currentColor
  }
}

const mapDispatch = dispatch => {
  return {
    setCurrColor: hex => dispatch(setCurrentColor(hex))
  }
}

export const ColorSelect = connect(mapState, mapDispatch)(SelectButton)
