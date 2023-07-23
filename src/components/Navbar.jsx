import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material'

import {NavLink} from 'react-router-dom';

const Header=styled(AppBar)
`
background:#111111
`
const Tabs= styled(NavLink)`
font-size:18px;
margin-right:20px;
color:inherit;
text-decoration:none;
`
function Navbar() {
  return (
    <Header position='static'>
        <Toolbar>
              <Tabs to='/'>Home</Tabs>
              <Tabs to='/add'>AddUser</Tabs>
              <Tabs to='/all'>AllUsers</Tabs>
        </Toolbar>
    </Header>
  )
}

export default Navbar