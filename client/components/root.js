import React from 'react'
import Navbar from './navbar'
import Routes from '../routes'
import ButtonAppBar from './altNav'

const Root = () => {
  return (
    <div>
      <ButtonAppBar />
      <Routes />
    </div>
  )
}

export default Root
