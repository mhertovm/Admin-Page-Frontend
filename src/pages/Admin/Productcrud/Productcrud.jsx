import { useEffect, useState } from 'react';

import * as React from 'react';
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
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

async function addProduct(){
  const token = localStorage.getItem("token");

  try {
    await fetch("http://localhost:3001/addProduct", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        quantity,
        img,
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
  <Table padding='checkbox' sx={{ minWidth: 650 }} aria-label="simple table">
  <TableRow>
    <TableCell align="left">img</TableCell>
    <TableCell align="left">name</TableCell>
    <TableCell align="left">price</TableCell>
    <TableCell align="left">quantity</TableCell>
    <TableCell align="left">category</TableCell>
    <TableCell align="left">CRUD</TableCell>
  </TableRow>
  </Table>

  <Table padding='checkbox' sx={{ minWidth: 650 }} aria-label="simple table">
  <TableRow>
    <TableCell>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Add Product
          </AccordionSummary>
          <AccordionDetails>
        
          <Table padding='checkbox'>
      <TableRow>
        <TableCell align="center">Img<Input onChange={(e)=> setImg(e.target.value)} /></TableCell>
        <TableCell align="center">Name<Input onChange={(e)=> setName(e.target.value)} /></TableCell>
        <TableCell align="center">Price<Input onChange={(e)=> setPrice(e.target.value)} /></TableCell>
        <TableCell align="center">Quantity<Input onChange={(e)=> setquantity(e.target.value)} /></TableCell>
        <TableCell align="center">CategoryId<Input onChange={(e)=> setCategoryId(e.target.value)} /></TableCell>
        <TableCell align="center">
            <Button variant="outlined" onClick={addProduct}>
                Add
            </Button>
        </TableCell>
      </TableRow>
      </Table>.
          
          </AccordionDetails>
        </Accordion>
      </div>
    </TableCell>
  </TableRow>
  </Table>


  {data.map((row) => (
    <Accordion key={row.id}>
      <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
      >
        <Table padding='checkbox' aria-label="simple table">
        <TableRow className='tablepadding'>
          <TableCell align="center">{row.img}</TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">{row.price}</TableCell>
          <TableCell align="center">{row.quantity}</TableCell>
          <TableCell align="center">{row.Category?.name}</TableCell>
          <TableCell align="center">
            <Button variant="outlined" onClick={()=>deleteProduct(row.id)}>
                Delite
            </Button>
          </TableCell>
        </TableRow>
        </Table>
      </AccordionSummary>
      <AccordionDetails>
      <Table padding='checkbox'>
      <TableRow>
        <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" label="Img" defaultValue={row.img} onChange={(e)=> setImg(e.target.value)} /></TableCell>
        <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" label="Name" defaultValue={row.name} onChange={(e)=> setName(e.target.value)} /></TableCell>
        <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" label="Price" defaultValue={row.price} onChange={(e)=> setPrice(e.target.value)} /></TableCell>
        <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" label="Quantity" defaultValue={row.quantity} onChange={(e)=> setquantity(e.target.value)} /></TableCell>
        <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" label="Category id"  onChange={(e)=> setCategoryId(e.target.value)} /></TableCell>
        <TableCell align="center">
            <Button variant="outlined" onClick={()=>updateProduct(row.id)}>
                Update
            </Button>
        </TableCell>
      </TableRow>
      </Table>
      </AccordionDetails>
    </Accordion>
  ))}  
  </TableContainer>    
</div>
);
}


export default Productcrud;