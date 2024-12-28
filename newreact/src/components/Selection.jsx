import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Selection = () => {
    var[name,setname]=useState()
    const Setnew =() => {
      setname("React")
    }
    const Setnew1=() => {
        setname("Angular")
      }
      const Setnew2=() => {
        setname("Python")
      }
      useEffect( () =>{
        Setnew()
      },[])
  return (
    <div>    
        <Typography variant='h3'>Welcome {name}</Typography>
        <Button variant='contained' onClick={Setnew} color="inherit">React</Button>&nbsp;&nbsp; 
        <Button variant='contained' onClick={Setnew1}color="inherit">Angular</Button>&nbsp;&nbsp; 
        <Button variant='contained' onClick={Setnew2}color="inherit">Python</Button>&nbsp;&nbsp; 
    </div>
  )
}

export default Selection