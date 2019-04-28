import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {saveGrid} from '../store/blocks'
import {saveGridsToLocal} from './utils/localStorage'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

function SavingGridView(props) {
  const {classes} = props

  return (
    <div>
      <Button
        id="saveGrid"
        variant="contained"
        size="large"
        fontSize="small"
        color="primary"
        className={classes.button}
        onClick={() => {
          props.saveGrid()
        }}
      >
        <Typography variant="h6" color="inherit">
          Save
        </Typography>
      </Button>
    </div>
  )
}

SavingGridView.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

const SavingGrid = withStyles(styles)(SavingGridView)

const mapState = state => {
  return {
    currColor: state.blocks.currentColor,
    grids: state.blocks.grids
  }
}

const mapDispatch = dispatch => {
  return {
    saveGrid: () => dispatch(saveGrid())
  }
}

export const SaveGrid = connect(mapState, mapDispatch)(SavingGrid)
