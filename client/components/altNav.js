import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

function ButtonAppBar(props) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Link to="/design">
          <Typography
            variant="h3"
            color="inherit"
            className={classes.grow}
            id="logo"
          >
            quilt-B
          </Typography>
        </Link>
        <Toolbar class="md-tall">
          <div className="links">
            <Link to="/login" className="navBtn">
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/signup" className="navBtn">
              <Button color="inherit">Sign Up</Button>
            </Link>
            <Link to="/design" className="navBtn">
              <Button color="inherit">Design</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
