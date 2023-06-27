import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
    <Sidebar/>
      <Outlet/>
    </>
  )
}

export default SharedLayout