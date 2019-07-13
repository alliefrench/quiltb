import React from 'react'
import Routes from '../routes'
import ButtonAppBar from './nav'
import Navbar from './navbar'

const Root = () => {
  return (
    <div>
      <div id="header" />
      {/* <ButtonAppBar /> */}
      <Navbar />
      <Routes />
    </div>
  )
}

export default Root
