import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from 'react'

const Toble = () => {
  return (
    <div>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Movie</TableCell>
                        <TableCell >Actor</TableCell>
                        <TableCell >Actress</TableCell>
                        <TableCell >Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Kgf</TableCell>
                        <TableCell>Yash</TableCell>
                        <TableCell>Srinidhi</TableCell>
                        <TableCell>2022</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Bahubali</TableCell>
                        <TableCell>Prabhas</TableCell>
                        <TableCell>Anushka</TableCell>
                        <TableCell>2017</TableCell>
                    </TableRow>
               </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Toble
