import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
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
        <Toolbar class="md-tall">
          {/* <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Link to="/design">
            <Typography
              variant="h3"
              color="inherit"
              className={classes.grow}
              id="logo"
            >
              quiltB
            </Typography>
          </Link>
          <div className="links">
            <Link to="/design" className="navBtn">
              <Button color="inherit">Design</Button>
            </Link>
            <Link to="/login" className="navBtn">
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/signup" className="navBtn">
              <Button color="inherit">Sign Up</Button>
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
