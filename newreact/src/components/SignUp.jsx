import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <div>
        <Typography variant="h2">Sign Up</Typography>
        <TextField label="UserName" variant="outlined" /><br></br><br></br>
        <TextField label="Password" variant="outlined" /><br></br><br></br>
        <Button variant='contained'>SIGNUP</Button><br></br><br></br>
    </div>
  )
}

export default SignUp