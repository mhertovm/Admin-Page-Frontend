import React from 'react'
import { Outlet } from 'react-router-dom'
import Panel from './Panel';

function Admin() {
  return (
    <div>
        <Panel/>
        <Outlet />
    </div>
  )
}

export default Admin;