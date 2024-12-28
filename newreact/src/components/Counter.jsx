import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[number,newnumber] =useState(0)
    const Plus =() => {
        newnumber(number +1)
    }
    const Minus =() => {
        newnumber (number -1)
    }
  return (
    <div>
        <Typography variant='h3'>{number}</Typography>
        <Button variant='contained' onClick={Plus}>Plus</Button>&nbsp;&nbsp; 
        <Button variant='contained' onClick={Minus}>Minus</Button>
    </div>
  )
}

export default Counter