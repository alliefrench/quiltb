import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {resetGrid} from '../store/blocks'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

function ResetGridView(props) {
  const {classes} = props

  return (
    <div>
      <Button
        id="resetGrid"
        variant="contained"
        size="large"
        fontSize="small"
        color="primary"
        className={classes.button}
        onClick={() => {
          props.clearGrid()
        }}
      >
        <Typography variant="h6" color="inherit">
          Reset
        </Typography>
      </Button>
    </div>
  )
}

ResetGridView.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

const ResettingGrid = withStyles(styles)(ResetGridView)

const mapState = state => {
  return {
    grids: state.blocks.grids
  }
}

const mapDispatch = dispatch => {
  return {
    clearGrid: () => dispatch(resetGrid())
  }
}

export const ResetGrid = connect(mapState, mapDispatch)(ResettingGrid)
