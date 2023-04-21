import { useEffect, useState } from 'react';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Input from '@mui/material/Input';

function Productcrud() {
  const [data, setdata]=useState([]);
  const [state, setState]=useState(false)
  const [name, setName]=useState('')
  const [price, setPrice]=useState('')
  const [img, setImg]=useState('')
  const [quantity, setquantity]=useState('')
  const [categoryId, setCategoryId]=useState('')

  useEffect(()=>{
    fetch("http://localhost:3001/product")
    .then(res=> res.json())
    .then(res=>setdata(res))
  },[state])
  async function deleteProduct(id){
console.log(id)
const token = localStorage.getItem("token");
      try {
        await fetch("http://localhost:3001/deleteProduct", {
          method: "DELETE",
          body: JSON.stringify({
            id,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": token
          },
        });
        setState(!state)
      } catch (err) {
        console.log(err);
      }
}
async function updateProduct(id){
    console.log(id)
    const token = localStorage.getItem("token");
          try {
            await fetch("http://localhost:3001/updateProduct", {
              method: "PUT",
              body: JSON.stringify({
                id,
                name,
                price,
                img,
                quantity,
                categoryId
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": token
              },
            });
            setState(!state)
          } catch (err) {
            console.log(err);
          }
    }

  return (
<div>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">img</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">quantity</TableCell>
            <TableCell align="right">category</TableCell>
            <TableCell align="right">CRUD</TableCell>
          </TableRow>
        </TableHead>
        </Table>

    
{data.map((row) => (
    <Accordion key={row.id}>
    <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
    >
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableBody>
            <TableRow>
                <TableCell align="right">{row.img}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.Category?.name}</TableCell>
                <TableCell align="right">
                    <Button variant="outlined" onClick={()=>deleteProduct(row.id)}>
                        Delite
                    </Button>
                </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </AccordionSummary>
    <AccordionDetails>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
            <TableRow
    
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="right"><Input onChange={(e)=> setImg(e.target.value)}/></TableCell>
                <TableCell align="right"><Input onChange={(e)=> setName(e.target.value)}/></TableCell>
                <TableCell align="right"><Input onChange={(e)=> setPrice(e.target.value)}/></TableCell>
                <TableCell align="right"><Input onChange={(e)=> setquantity(e.target.value)}/></TableCell>
                <TableCell align="right"><Input onChange={(e)=> setCategoryId(e.target.value)}/></TableCell>
                <TableCell align="right">
                    <Button variant="outlined" onClick={()=>updateProduct(row.id)}>
                        Update
                    </Button>
                </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </AccordionDetails>
    </Accordion>
    ))}
        
</TableContainer>
</div>
  );
}


export default Productcrud;