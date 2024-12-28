import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,setname]=useState("Anjana")
    var[name1,setname1]=useState()
    const setval= (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
    const Setnew =() => {
        setname1(name)
        
    }
  return (
    <div>
        <Typography variant='h3'>Welcome {name1}</Typography>
        <TextField variant='outlined' onChange={setval}></TextField>&nbsp;&nbsp; 
        <Button variant='contained' onClick={Setnew}>SUBMIT</Button>
    </div>
  )
}

export default StateBasics