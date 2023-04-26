import { useEffect, useState } from 'react';

import * as React from 'react';
import Table from '@mui/material/Table';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableRow from '@mui/material/TableRow';
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Input from '@mui/material/Input';

function Categorycrud() {
  const [data, setdata]=useState([]);
  const [state, setState]=useState(false)
  const [name, setName]=useState('')
 
  const token = localStorage.getItem("token");
  useEffect(()=>{
    fetch("http://localhost:3001/category", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": token
      },
    })
    .then(res=> res.json())
    .then(res=>setdata(res))
  },[state])

async function deleteCategory(id){
    try {
      await fetch("http://localhost:3001/deleteCategory", {
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
async function updateCategory(id){
    const token = localStorage.getItem("token");
      try {
        await fetch("http://localhost:3001/updatecategory", {
          method: "PUT",
          body: JSON.stringify({
            id,
            name,
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

async function addCategory(){

  try {
    await fetch("http://localhost:3001/addCategory", {
      method: "POST",
      body: JSON.stringify({
        name,
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

  <Table padding='checkbox' sx={{ minWidth: 650 }} aria-label="simple table">
  <TableRow>
    <TableCell align="center">id</TableCell>
    <TableCell align="center">name</TableCell>
    <TableCell align="center">CRUD</TableCell>
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
            Add Category
          </AccordionSummary>
          <AccordionDetails>
        
          <Table padding='checkbox'>
      <TableRow>
        <TableCell align="center">Category name<Input onChange={(e)=> setName(e.target.value)}></Input></TableCell>
        <TableCell align="right">
            <Button variant="outlined" onClick={addCategory}>
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
        <TableCell align="center">{row.id}</TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="right">
            <Button variant="outlined" onClick={()=>deleteCategory(row.id)}>
                Delite
            </Button>
          </TableCell>
        </TableRow>
        </Table>
      </AccordionSummary>
      <AccordionDetails>
      <Table padding='checkbox'>
      <TableRow>
        <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" label="Category name" defaultValue={row.name} onChange={(e)=> setName(e.target.value)}/></TableCell>
        <TableCell align="right">
            <Button variant="outlined" onClick={()=>updateCategory(row.id)}>
                Update
            </Button>
        </TableCell>
      </TableRow>
      </Table>
      </AccordionDetails>
    </Accordion>
  ))}    
</div>
);
}


export default Categorycrud;