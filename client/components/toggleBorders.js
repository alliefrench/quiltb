import React from 'react'
// import {connect} from 'react-redux'
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

function ToggleBordersBtn(props) {
  const {classes} = props

  return (
    <div>
      <Button
        id="toggleBordersBtn"
        variant="contained"
        size="large"
        fontSize="small"
        color="primary"
        className={classes.button}
        onClick={() => {
          props.toggle()
        }}
      >
        <Typography variant="h6" color="inherit">
          Borders
        </Typography>
      </Button>
    </div>
  )
}

ToggleBordersBtn.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

export const ToggleBorders = withStyles(styles)(ToggleBordersBtn)

// const mapState = state => {
//   return {
//     currColor: state.blocks.currentColor,
//     grids: state.blocks.grids
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     saveGrid: () => dispatch(saveGrid())
//   }
// }

// export const SaveGrid = connect(mapState, mapDispatch)(SavingGrid)
