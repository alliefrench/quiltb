import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {resetGrids} from '../store/blocks'

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

function NavBar(props) {
  const {classes, handleClick, isLoggedIn} = props
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
        <Toolbar className="md-tall">
          {isLoggedIn ? (
            <div className="links">
              <a href="#" onClick={handleClick}>
                <Button color="inherit">Logout</Button>
              </a>
              <Link to="/home">
                <Button color="inherit">Home</Button>
              </Link>
            </div>
          ) : (
            <div className="links">
              <Link to="/login" className="navBtn">
                <Button color="inherit">Login</Button>
              </Link>
              <Link to="/signup" className="navBtn">
                <Button color="inherit">Sign Up</Button>
              </Link>{' '}
            </div>
          )}

          <div className="links">
            <Link to="/design" className="navBtn">
              <Button color="inherit">Design</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(resetGrids())
      dispatch(logout())
    }
  }
}

const ButtonAppBar = connect(mapState, mapDispatch)(NavBar)

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
  // handleClick: PropTypes.func.isRequired,
  // isLoggedIn: PropTypes.bool.isRequired
}

export default withStyles(styles)(ButtonAppBar)
