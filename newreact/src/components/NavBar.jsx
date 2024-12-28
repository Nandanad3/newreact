import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar color='secondary'>
            <Toolbar>
                <Typography variant='h6'>Registration</Typography>
                <Link to='/signup'>
                <Button variant='contained' color='success'>SignUp</Button>
                </Link>&nbsp;&nbsp;
                <Link to='/login'>
                <Button variant='contained' color='success'>Login</Button> 
                </Link> &nbsp;&nbsp;
                <Link to='/toble'>
                <Button variant='contained' color='success'>Table</Button> 
                </Link> &nbsp;&nbsp;  
                <Link to='/statebasics'>
                <Button variant='contained' color='success'>State</Button> 
                </Link> &nbsp;&nbsp; 
                <Link to='/counter'>
                <Button variant='contained' color='success'>Counter</Button> 
                </Link> &nbsp;&nbsp; 
                <Link to='/selection'>
                <Button variant='contained' color='success'>Selection</Button> 
                </Link> &nbsp;&nbsp;
                <Link to='/api'>
                <Button variant='contained' color='success'>Api</Button> 
                </Link> &nbsp;&nbsp;
                <Link to='/product'>
                <Button variant='contained' color='success'>Product</Button> 
                </Link> &nbsp;&nbsp;
            </Toolbar>
        </AppBar><br /><br /><br />
    </div>
  )
}

export default NavBar